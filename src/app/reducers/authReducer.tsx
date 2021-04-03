import { i_auth_action as i_action, i_auth_state as i_state } from '../intefaces/authInterface';
import types from '../types';

const init:i_state = {
    uid: '',
    check: undefined
}

const authReducer = (state = init,action:i_action):i_state => {

    const { login,logout,checking } = types;

    switch( action.type ){
        case login: 
            if( action.payload ) {
                state = {
                    ...state,
                    uid: action.payload.uid
                }
            }
            break;
        case checking:
            state = {
                ...state,
                check: false
            }
            
            break;
        case logout:
            state = init;
            break;
    }

    return state;
}


export default authReducer;