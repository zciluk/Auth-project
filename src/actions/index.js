import {SIGN_IN, SIGN_OUT} from './types'

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