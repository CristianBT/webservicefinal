import { i_h_state,i_h_action } from "../intefaces/horariosInteface";
import types from "../types";


const init:i_h_state = { }


const afluenciaReducer = ( state = init, action:i_h_action ):i_h_state => {

    const { getAfluenciaStudent,clearAfluenciaStudent } = types;
    const { type,payload } = action;

    switch( type ){
        case getAfluenciaStudent:
            state = {
                ...state,
                horarios: payload?.horarios
            }
            break;
        case clearAfluenciaStudent:
            state = init;
            break;
    }
    return state;
}


export default afluenciaReducer;