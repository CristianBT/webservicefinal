import React, { FormEvent } from 'react';
import useForm from '../../hooks/useForm';
import { i_login } from '../../intefaces/loginInterface';
import { useDispatch,useSelector } from 'react-redux';
import { startLogin } from '../../actions/auth';
import i_redux from '../../intefaces/reduxInterface';
import { startLoading } from '../../actions/ui';
import Loading from '../ui/loading';



const init:i_login = {
    email: '',
    password: ''
}

const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector((info:i_redux) => info.ui);

    const [ values,onChangeInput ] = useForm(init);
    const { email, password }:i_login = values;

    const onSubmit = ( e:FormEvent ) => {
        e.preventDefault();
        dispatch(startLoading())
        dispatch(startLogin({email,password}));
    }

    const { err } = useSelector((info:i_redux) => info.err);

    return <>
        {
            loading 
            ? <Loading type='spin' color='#48f542'/>
            : <div className="App container">
                <div className="col-md-6">
                    <h1 className="font-weight-bold  text-center p-3 mb-2 bg-danger text-white">Universidad Técnica Del Norte</h1>
                    <hr className="my-3" />
                    <h1 className="text-center ">Grupo de Transporte UTN</h1>
                    <hr className="my-3" />
                    { err && <p className="text-center">{ err } </p> }
                    
                    <form onSubmit={ onSubmit }>
                        <div>
                            <label 
                                htmlFor="email-id"
                                className="form-label"
                                >Email
                            </label>
                            <input 
                                id="email-id"
                                className="form-control"
                                type="text" 
                                name='email'
                                placeholder="Ingrese su email"
                                onChange={ onChangeInput }
                                value={ email }
                            />
                        </div>
                        <div>
                            <label 
                                htmlFor="password-id"
                                className="form-label"
                                >Contraseña
                            </label>
                            <input 
                                id="password-id"
                                className="form-control"
                                type="password" 
                                name='password'
                                placeholder="Ingrese su contraseña"
                                onChange={ onChangeInput }
                                value={ password }
                            />
                        </div>
                        <hr className="my-3" />
                        <button
                            type='submit' 
                            className="btn btn-primary btn-lg btn-block" 
                            >Iniciar Sesion
                        </button>
                    </form>
                </div>
            </div>
        }
    </>
};


export default LoginScreen;