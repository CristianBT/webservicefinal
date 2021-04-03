import { i_error_action as i_action, i_error_state as i_state } from '../intefaces/errorInterface';
import types from '../types';

const init:i_state = {
    err: undefined
}

const errorReducer = (state = init, action:i_action):i_state => {
    const { setError,delError } = types;
    switch( action.type ){
        case setError:
            state = {
                ...state,
                err: action.payload.err
            }
            break;
        case delError:
            state = init;
            break;
    }
    return state;
}


export default errorReducer;