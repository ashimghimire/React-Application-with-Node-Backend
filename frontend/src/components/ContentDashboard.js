import React from 'react';
import Items from '../components/items';
import PrivateRoute from '../PrivateRoute';
import {Route, BrowserRouter, Router, Switch} from 'react-router-dom';
import itemHome from './Itemhome';
import Chinese from './Chinese';
import Italian from './Italian';
import Baked from './Baked';
import {history} from '../configureStore';

const ContentDashbaord = (props) => {
    
    return (
        <div className="col-sm-0 col-md-9 col-xl-10">
        <div className="col-sm-12 mt-2">
        <button className="btn btn-outline-dark my-2 my-sm-0 mr-2 float-right" onClick={()=>props.logout(props.history)} type="submit">Logout</button>
        </div>
        <Router history={history}>
             <Switch>                   
                    <Route  path="/dashboard/chinese" component={Chinese} />
                    <Route  path="/dashboard/italian"  component={Italian}/>
                    <Route path="/dashboard/baked"  component={Baked}/>
                  </Switch>  
        </Router>     
        </div>
    )
}

export default ContentDashbaord;