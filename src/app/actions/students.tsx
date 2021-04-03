import types from '../types';
import { i_student_action as i_action,i_student } from '../intefaces/studentInterface';
import { fetchWithToken } from '../helpers/fetch';
import { stopLoading } from './ui';


export const startLoadingStudents = ():Function => {
    return async ( callback:Function ) => {
        const resp = await fetchWithToken({url:'/estudiante'})
        const json = await resp.json();

        callback( loadStudents(json.estudianteAll) );
        callback( stopLoading() );
    }
}

export const loadStudents = ( students:Array<i_student>):i_action => {
    const { loadStudents } = types;
    return {
        type: loadStudents,
        payload: {
            students
        }
    }
}

export const setActiveStudent = (active:i_student):i_action => {
    const { setActiveStudent } = types;

    return {
        type: setActiveStudent,
        payload: {
            active
        }
    }
}


export const clearStudents = () => {
    const { clearStudents:type } = types;

    return { type }
}