import {SIGN_IN, SIGN_OUT} from './types'

export const signIn = (imageUrl) => {
    return {
        type: SIGN_IN,
        payload: imageUrl
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};