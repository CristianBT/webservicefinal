import { i_pdf_state as i_state, i_pdf_action as i_action } from "../intefaces/pdfInterface";
import types from "../types";


const init:i_state = { openModal: false }

const pdfReducer = (state = init, action:i_action):i_state => {
    const { setPDF,clearPDF } = types;
    switch( action.type ){
        case setPDF:
            state = {
                ...state,
                ...action.payload
            }
            break;
        case clearPDF:
            state = init;
    }
    return state;
}


export default pdfReducer;