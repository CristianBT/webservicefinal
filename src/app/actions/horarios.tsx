import { fetchWithToken } from "../helpers/fetch";
import { i_h_action,i_horarios, i_h_consulta } from "../intefaces/horariosInteface";
import types from "../types";
import { stopLoading } from "./ui";


export const startingGetHorarios = ( data:i_h_consulta ) => async ( callback:Function ) => {
    const resp = await fetchWithToken({url: '/consultahorarios', method: 'POST', data});
    const dataResp = await resp.json();
    const horarios = dataResp.horariosAll;

    callback( getHorarios(horarios) );
    callback( stopLoading() );
}

export const getHorarios =  ( horarios:Array<i_horarios> ):i_h_action => {
    const { getAfluenciaStudent:type } = types;
    return {
        type,
        payload: {
            horarios
        }
    }
}

export const clearHorarios = () => {
    const { clearAfluenciaStudent:type } = types;
    return {
        type
    }
}