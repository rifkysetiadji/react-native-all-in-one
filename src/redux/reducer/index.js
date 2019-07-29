import {combineReducers} from 'redux';
import auth from './auth';
import todo from './todo';

export default combineReducers({
    auth:auth,
    todo:todo
})