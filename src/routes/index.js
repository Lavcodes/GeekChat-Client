import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

 import AllUsers from './Home';
 import Login from "./Login";
 import Register from './Register';
 import CreateChannel from './CreateChannel';

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
      <Route path="/createchannel" exact component={CreateChannel}/>
    </Switch>
    </BrowserRouter>
  );
}
