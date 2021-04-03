import { i_error_action as i_action } from '../intefaces/errorInterface';
import types from '../types';

export const setError = ( msg:string ):i_action => {
    const { setError } = types;

    return {
        type: setError,
        payload:{
            err: msg
        }
    };
}

export const delErrorMsg = ():i_action => {
    const { delError } = types;

    return {
        type: delError,
        payload: { } 
    }
}