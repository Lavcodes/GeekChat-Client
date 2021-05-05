import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Routes} from './routes';
//import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider, createHttpLink, ApolloLink, concat,  from, split} from '@apollo/client';
import  {ApolloClient}  from '@apollo/client/core';
import  {InMemoryCache}  from '@apollo/client/cache';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import 'semantic-ui-css/semantic.min.css'

import { setContext } from '@apollo/client/link/context';
//import Button from '@material-ui/core/Button';
//import createFileLink from './createFileLink';

const httpLink = createHttpLink({ uri: 'http://localhost:8081/graphql' });

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:8081/subscriptions',
  options: {
    reconnect: true, 
    connectionParams:{
      token: localStorage.getItem('token'),
      refreshToken : localStorage.getItem('refreshToken'),
    },
  },
});


const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} })=>({
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || null,
    }
  }));

  return forward(operation);
})
const tokenMiddleware = new ApolloLink((operation, forward) => {
  // add the recent-activity custom header to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'x-token': localStorage.getItem('token') ,
      'x-refresh-token' :localStorage.getItem('refreshToken'),
    }
  }));

  return forward(operation);
})
/*const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  headers['x-token']= token
  headers['x-refresh-token']=localStorage.getItem('refreshToken')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
      'x-token':token,
      'x-refresh-token' : localStorage.getItem('refreshToken'),
    }
  }
})*/
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link:from([
    authMiddleware,
    tokenMiddleware,
    splitLink,
  ])
  
});




ReactDOM.render(
 
    <ApolloProvider client={client}>
    <Routes />
    </ApolloProvider>,
   

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
