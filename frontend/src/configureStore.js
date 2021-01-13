import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import { combineReducers } from 'redux';
import LoginReducer from '../src/LoginReducer';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import history from './history';
import RegisterReducer from './reducers/RegisterReducer';

const rootReducer= (history) => combineReducers({
        loginReducer:LoginReducer,
        register:RegisterReducer,
        router:connectRouter(history)

    }
);

const middlewares=[thunk, routerMiddleware(history)];

function configureStoreProd(){
 return createStore(rootReducer(history),{},compose(applyMiddleware(...middlewares)));
}

const store=configureStoreProd();

export{history}

export default store;
