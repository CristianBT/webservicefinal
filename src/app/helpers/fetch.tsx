import { i_fetch } from "../intefaces/fetchInterface";

const endPoint = process.env.REACT_APP_API_URL;

export const fetchWithoutToken = ({ url,method = 'GET',data }:i_fetch):Promise<any> => {
    if( method === 'GET'){
        return fetch(`${ endPoint }${ url }`)
    }else{
        return fetch(`${ endPoint }${ url }`, {
            method,
            headers: { 'Content-type' : 'application/json' },
            body: JSON.stringify( data )
        })
    }
}


export const fetchWithToken = ({ url,method = 'GET',data }:i_fetch): Promise<any> => {
    const token = String(localStorage.getItem('token'));

    if( method === 'GET'){
        return fetch(`${ endPoint }${ url }`,{
            headers: { 
                'Content-type' : 'application/json',
                'token': token
            }
        })
    }else {
        return fetch(`${ endPoint }${ url }`, {
            method,
            headers: { 
                'Content-type' : 'application/json',
                'token': token
            },
            body: JSON.stringify( data )
        })
    }
}