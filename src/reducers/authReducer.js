import {SIGN_IN, SIGN_OUT} from '../actions/types'

const INITIAL_STATE = {
    isSignedIn: null,
    imageUrl: null
    
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, imageUrl: action.payload};
        case SIGN_OUT:
            return {...state, isSignedIn: false, imageUrl: null};
        default:
            return state;
    }
};