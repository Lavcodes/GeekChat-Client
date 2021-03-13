import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
 import AllUsers from './Home';
 import Register from './Register';
 export function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={AllUsers}/>
    </Switch>
    <Switch>
      <Route path="/register" exact component={Register}/>
    </Switch>
    </BrowserRouter>
  );
}
