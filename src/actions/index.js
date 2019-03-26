import {SIGN_IN, SIGN_OUT,  SET_USER_LOCATION } from './types'

export const signIn = (imageUrl, profileName) => {
    return {
        type: SIGN_IN,
        payload: {imageUrl: imageUrl, profileName: profileName}
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};
export const setUserLocation = (lat, long) => {
    return {
        type: SET_USER_LOCATION,
        payload: {lat: lat ,long: long}
    };
};