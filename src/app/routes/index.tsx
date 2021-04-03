import { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PrivateRouter, PublicRouter } from './authorization';

// componentes 

import DashboardRoutes from './dashboard/dashboard';
import LoginScreen from '../components/auth/loginScreen';
import { useDispatch, useSelector } from 'react-redux';
import i_redux from '../intefaces/reduxInterface';
import { startChecking } from '../actions/auth';
import Loading from '../components/ui/loading';


const Routes = () => {

    const { uid,check } = useSelector((info:i_redux) => info.auth);
    const auth = !!uid;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startChecking() )
    },[ dispatch ])

    if( check ) {
        return <Loading type='spin' color='#48f542'/>
    }

    return (
        <Router>
            <Switch>
                <PublicRouter 
                    isAuth={ auth }
                    path='/login'
                    exact={ true }
                    Component={ LoginScreen }
                />

                <PrivateRouter
                    isAuth={ auth }
                    path='/'
                    exact={ false }
                    Component={ DashboardRoutes }
                />
            </Switch>
        </Router>
    )
}


export default Routes;