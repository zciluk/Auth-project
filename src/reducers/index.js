import { combineReducers } from 'redux';
import authReducer  from './authReducer';
import mapReducer  from './mapReducer';
export default combineReducers( {
    auth: authReducer,
    map: mapReducer
})