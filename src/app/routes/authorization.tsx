import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import { i_types_routes } from '../intefaces/routesInterface';

export const PrivateRouter = ({isAuth,Component,...rest}:i_types_routes) => <Route
    { ...rest }
    component={ () => isAuth ? Component() : <Redirect to='/login'/> }
/>


export const PublicRouter = ({isAuth,Component,...rest}:i_types_routes) => <Route
    {...rest}
    component={ () => isAuth ? <Redirect to='/'/> : Component() }
/>