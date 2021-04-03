import React, { useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { clearActiveDriver, closeDriverModal, startAddDriver, startUpdateDriver } from '../../../actions/drivers';
import { customStyles } from '../../../helpers/modal';
import useForm from '../../../hooks/useForm';
import { i_driver } from '../../../intefaces/driverInterface';
import i_redux from '../../../intefaces/reduxInterface';



const ModalCRUD = () => {

    const dispatch = useDispatch();

    const { active,openModal } = useSelector((info:i_redux) => info.drivers);

    let init:i_driver = {
        nombre_conductor: '',
        apellido_conductor:'',
        cedula_conductor:'',
        celular_conductor:'',
        email_conductor:'',
        numerorecorridomaximo: 0,
        state_conductor: false
    }

    if( active ){
        init = active;
    }

    const [ values, onChangeInput,reset ] = useForm(init);


    const activeId = useRef( active );

    useEffect(() => {
        if( active !== activeId.current ){
            reset( active )
            activeId.current = active
        }
    },[active,reset])
    

    const { 
        nombre_conductor,
        apellido_conductor,
        cedula_conductor,
        celular_conductor,
        email_conductor,
        numerorecorridomaximo,
        state_conductor
    }:i_driver = values;


    const closeModal = () => {
        dispatch( closeDriverModal() );
        dispatch( clearActiveDriver() );
    }


    const handleSubmit =  (e:Event) => {
        e.preventDefault();
        if( active ) {
            return dispatch( startUpdateDriver(values) );
        } else {
            return dispatch( startAddDriver(values) );
        }
    }

    return <>
        <Modal
            isOpen={ Boolean(openModal) }
            ariaHideApp={ false }
            onRequestClose={closeModal}
            style={customStyles}
        >
            <form onSubmit={ handleSubmit as any}>
                <div className='mb-3'>
                    <label htmlFor="nombreid" className='form-label'>Nombre</label>
                    <input
                        id='nombreid' 
                        type="text"
                        className='form-control'
                        name='nombre_conductor'
                        value={ nombre_conductor }
                        onChange={ onChangeInput }
                        disabled={ !!active }
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="apellidoid" className='form-label'>Apellido</label>
                    <input
                        id='apellidoid' 
                        type="text"
                        className='form-control'
                        name='apellido_conductor'
                        value={ apellido_conductor }
                        onChange={ onChangeInput }
                        disabled={ !!active }
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="cedulaid" className='form-label'>Cedula</label>
                    <input
                        id='cedulaid' 
                        type="text"
                        className='form-control'
                        name='cedula_conductor'
                        value={ cedula_conductor }
                        onChange={ onChangeInput }
                        disabled={ !!active }
                        maxLength={ 10 }
                        minLength={ 0 }
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="correoid" className='form-label'> Correo</label>
                    <input
                        id='correoid' 
                        type="email"
                        className='form-control'
                        name='email_conductor'
                        value={ email_conductor }
                        onChange={ onChangeInput }
                        disabled={ !!active }
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="telefonoid" className='form-label'>Telefono</label>
                    <input
                        id='telefonoid' 
                        type="telf"
                        className='form-control'
                        name='celular_conductor'
                        value={ celular_conductor }
                        onChange={ onChangeInput }
                        disabled={ !!active }
                        maxLength={ 10 }
                        minLength={ 0 }
                    />
                </div>
                <div className='mb-3'>
                    <label>
                        Estado:
                        <input
                            name="state_conductor"
                            type="checkbox"
                            checked={ state_conductor }
                            onChange={ onChangeInput } 
                        />
                    </label>
                </div>
                <div className='mb-3'>
                    <label htmlFor="recorridosid" className='form-label'>max recorrido</label>
                    <input
                        id='recorridosid' 
                        type="number"
                        className='form-control'
                        name='numerorecorridomaximo'
                        value={ numerorecorridomaximo }
                        onChange={ onChangeInput }
                        min={ 0 }
                    />
                </div>

                <button type="submit" className='btn btn-success mb-3' style={{width:'100%'}}>Enviar</button>
                <button type="button" className='btn btn-danger' onClick={ closeModal } style={{width:'100%'}}>Cancelar</button>
            </form>
        </Modal>
    </>
}

export default ModalCRUD;