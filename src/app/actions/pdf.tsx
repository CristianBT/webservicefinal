import { i_pdf_action as i_action } from "../intefaces/pdfInterface";
import types from "../types";

export const startingSetPdf = ( urlString:string ) => async ( callback:Function ) =>{
    callback( setPdf(urlString) );
}

export const setPdf = ( urlString:string ):i_action => {
    const { setPDF } = types;

    return {
        type: setPDF,
        payload: {
            urlString,
            openModal: true
        }
    }
}

export const clearPdf  = () => {
    const { clearPDF:type } = types;

    return { type }
}