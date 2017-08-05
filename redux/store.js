import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';


const initialState = {
    auth:{
        authenticated:false,
        authenticating:false,
        user:{},
    }
}

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(
        createLogger(),
        thunk
    )

);
export default store;