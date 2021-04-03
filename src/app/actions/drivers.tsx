import { fetchWithToken } from "../helpers/fetch";
import { i_driver, i_driver_action as i_action } from "../intefaces/driverInterface";
import types from "../types";
import { stopLoading } from "./ui";
import Swal from 'sweetalert2';



export const startLoadDrivers = () => async ( callback:Function ) => {
    const resp = await fetchWithToken({url:'/conductor'});
    const respJson = await resp.json();
    const drivers = respJson.conductoresAll;

    callback( loadDrivers( drivers ));
    callback( stopLoading() );
}

export const loadDrivers = ( drivers:Array<i_driver>):i_action => {
    const { loadDrivers:type } = types;
    return {
        type,
        payload: {
            drivers
        }
    }
} 


export const setActiveDriver = ( driver:i_driver ):i_action => {
    const { setActiveDriver:type } = types;

    return {
        type,
        payload: {
            active: driver
        }
    }
}

export const activeDriverModal = ():i_action => {
    const { openModalDrivers:type } = types;
    return { type }
}

export const closeDriverModal = ():i_action => {
    const { clseModalDrivers:type } = types;
    return { type }
}

export const clearActiveDriver = ():i_action => {
    const { clearActiveDriver:type } = types;
    return { type }
}


export const clearDriver = ():i_action => {
    const { clearDrivers:type } = types;
    return { type }
}


export const startAddDriver = (driver:i_driver) => async (callback:Function) => {
     /*
        poner la ruta del backend para agregar el driver

        const resp = await fetchWithToken({url: `/ruta`,method: 'POST',data:driver});
        const dataResp = await resp.json();
    */
   
        Swal.fire({
            icon: 'success',
            title: 'Actividad completada',
            // text: dataResp.message
        });
    // callback( addDriver );
    callback( closeDriverModal() );
}

export const addDriver = (driver:i_driver):i_action => {
    const { addDriver:type } = types;
    return {
        type,
        payload: {
            update: driver
        }
    }
}


export const startUpdateDriver =  (driver:i_driver) => async (callback:Function) => {
    const resp = await fetchWithToken({url: `/conductor/${driver.cedula_conductor}`,method: 'PUT',data:driver});
    const dataResp = await resp.json();

    Swal.fire({
        icon: 'success',
        title: 'Actividad completada',
        text: dataResp.message
    })

    callback(updateDriver(driver))
    callback( closeDriverModal() );
    callback( clearActiveDriver() );
}


export const updateDriver = (driver:i_driver):i_action => {
    const { updateDriver:type } = types;
    return { 
        type,
        payload: {
            update: driver
        }
    }
}


export const startDeleteDriver = (driver:i_driver) => async ( callback:Function ) => {

    /*
        poner la ruta del backend para eliminar el driver

        const resp = await fetchWithToken({url: `/ruta/{driver.cedula_conductor}`,method: 'DELETE',data:driver});
        const dataResp = await resp.json();
    */
   
    Swal.fire({
        icon: 'success',
        title: 'Actividad completada',
        // text: dataResp.message
    });
    // callback( deleteDriver(driver) );
} 


const deleteDriver = (driver:i_driver):i_action => {
    const { deleteDriver:type } = types;
    return { 
        type,
        payload: {
            update: driver
        }
    }
}