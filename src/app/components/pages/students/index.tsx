import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingStudents } from '../../../actions/students';
import { startLoading } from '../../../actions/ui';
import i_redux from '../../../intefaces/reduxInterface';
import Loading from '../../ui/loading';
import ListStudents from './list';

const Students = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((info: i_redux) => info.ui);

    useEffect(() => {
        dispatch(startLoadingStudents())
        dispatch(startLoading());
    }, [dispatch])

    return <>
        {
            loading
                ? <Loading type='spin' color='#48f542' />
                : <div>
                    <h3 className="text-center">Lista de Estudiantes</h3>
                    <hr className="my-3" />
                    <ListStudents />

                </div>
        }
    </>
}

export default Students;