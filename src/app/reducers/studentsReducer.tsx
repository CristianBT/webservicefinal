import type from '../types';
import { i_student_state as i_state, i_student_action as i_action } from '../intefaces/studentInterface';


const init:i_state = { }


const studentReducer = (state = init, action:i_action):i_state => {
    const { loadStudents, setActiveStudent,clearStudents } = type;

    switch( action.type ){
        case loadStudents:
            state = {
                ...state,
                students: action.payload.students
            }
            break;
        case setActiveStudent:
            state = {
                ...state,
                ...action.payload
            }
            break;
        case clearStudents:
            state = init;
            break;
    }
    return state;
}


export default studentReducer;