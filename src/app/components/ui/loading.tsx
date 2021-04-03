import React from 'react';
import ReactLoading, { LoadingProps } from 'react-loading';


const Loading = ({ type, color }:LoadingProps) => (
    <ReactLoading type={type} color={color} height={'50px'} width={'50px'} />
)

 
export default Loading;