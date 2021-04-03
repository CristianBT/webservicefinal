import types from "../types";
import { i_driver, i_driver_action as i_action, i_driver_state as i_state } from '../intefaces/driverInterface';


const init:i_state = { openModal:false }

const driverReducer = (state = init, action:i_action):i_state => {
    const { loadDrivers, setActiveDriver, clearDrivers,openModalDrivers,clseModalDrivers,clearActiveDriver,
        updateDriver,deleteDriver,addDriver
    } = types;
    
    switch( action.type ){
        case loadDrivers:

            state = {
                ...state,
                ...action.payload
            }
            break;
        case setActiveDriver:
            state = {
                ...state,
                ...action.payload
            }
            break;
        case openModalDrivers:
            state = {
                ...state,
                openModal: true
            }
            break;
        case clseModalDrivers:
            state = {
                ...state,
                openModal: false
            }
            break;
        case clearActiveDriver:
            state = {
                ...state,
                active: undefined
            }
            break;
        case updateDriver:
            state = {
                ...state,
                drivers: state.drivers?.map((driver:i_driver) => {
                    const update =  action.payload?.update;
                    if( update && (update.cedula_conductor === driver.cedula_conductor) ) {
                        return update;
                    }else {
                        return driver;
                    }
                })
            }
            break;
        case deleteDriver: 
            state = {
                ...state,
                drivers: state.drivers?.filter((driver:i_driver) => 
                    action.payload?.update?.cedula_conductor !== driver.cedula_conductor
                )
            }
            break;
        case addDriver:
            state = {
                ...state,
                ...action.payload?.update
            }
            break;
        case clearDrivers:
            state = init;
            break;
    }

    return state;
}


export default driverReducer;