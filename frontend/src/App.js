import React from 'react';
import './App.css';
import Login from './containers/Login';
import {Route, BrowserRouter, Router, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from './Dashboard';
import Register from './components/Register';
import Home from './components/Home';
import '../src/App.css';

class App extends React.Component {
  
  render() {
        return <div>
                  <Switch>                  
                    <Route  path="/login" exact component={Login} />
                    <Route  path="/register" exact component={Register} />
                    <PrivateRoute  path="/dashboard" component={Dashboard}/>
                    <Route path="/" exact component={Home}/>
                  </Switch>
              </div>
  }
}


export default App;
