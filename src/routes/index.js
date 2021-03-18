import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Redirect
} from "react-router-dom";
import decode from 'jwt-decode';

 import AllUsers from './Home';
 import Login from "./Login";
 import Register from './Register';
 import CreateChannel from './CreateChannel';
 import ViewChnanel from './ViewChannel';

 const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    decode(token);
    decode(refreshToken);
  } catch (err) {
    return false;
  }

  return true;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      ))}
  />
);

 export function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={AllUsers}/>
    </Switch>
    <Switch>
      <Route path="/register" exact component={Register}/>
    </Switch>
    <Switch>
      <Route path="/login" exact component={Login}/>
    </Switch>
    <Switch>
      <PrivateRoute path="/createchannel" exact component={CreateChannel}/>
    </Switch>
    <Switch>
      <PrivateRoute path="/view-channel" exact component={ViewChnanel}/>
    </Switch>
    </BrowserRouter>
  );
}
