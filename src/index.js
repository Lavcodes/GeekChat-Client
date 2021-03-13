import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Routes} from './routes';
//import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import  {ApolloClient}  from '@apollo/client/core';
import  {InMemoryCache}  from '@apollo/client/cache';
import 'semantic-ui-css/semantic.min.css'
//import Button from '@material-ui/core/Button';


const client = new ApolloClient({
  uri: 'http://localhost:8081/graphql',
  cache: new InMemoryCache()
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
