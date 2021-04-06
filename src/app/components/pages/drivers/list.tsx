import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeDriverModal, setActiveDriver, startDeleteDriver } from '../../../actions/drivers';
import { i_driver } from '../../../intefaces/driverInterface';
import i_redux from '../../../intefaces/reduxInterface';
import ModalCRUD from './modal';

const ListDrivers = () => {

    const dispatch = useDispatch();

    const { drivers } = useSelector((info:i_redux) => info.drivers);

    const handleEditDriver = (driver:i_driver) => {
        dispatch( setActiveDriver(driver) );
        dispatch( activeDriverModal() );
    }

    const handleAdd = () =>  dispatch( activeDriverModal() );
    
    const handleDeleteDriver = (driver:i_driver) => dispatch( startDeleteDriver(driver) );
    return <>
     {/*    <button type="button" onClick={ handleAdd }> Agregar </button> */}
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Cedula</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th>Estado</th>
                    <th>Recorridos</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    drivers?.map((driver:i_driver) => <tr key={driver.cedula_conductor}>
                        <td>{driver.nombre_conductor}</td>
                        <td>{driver.apellido_conductor}</td>
                        <td>{driver.cedula_conductor}</td>
                        <td>{driver.email_conductor}</td>
                        <td>{driver.celular_conductor}</td>
                        <td>{driver.state_conductor ? 'activo' : 'inactivo'}</td>
                        <td>{driver.numerorecorridomaximo}</td>
                        <td>
                            <i style={{ cursor: 'pointer', margin: '0 6px '}} onClick={ () => handleEditDriver(driver) } className='fa fa-edit'></i>
                          {/*   <i style={{ cursor: 'pointer', margin: '0 6px '}} onClick={ () => handleDeleteDriver(driver) } className='fa fa-trash'></i> */}
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
        
        <ModalCRUD/>
    </>
}


export default ListDrivers;