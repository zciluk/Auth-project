import { SET_USER_LOCATION } from '../actions/types'

const INITIAL_STATE = {
    latitude: 0,
    longitude: 0
    
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER_LOCATION:
            return {...state, latitude: action.payload.lat, longitude: action.payload.long};
        default:
            return state;
    }
};