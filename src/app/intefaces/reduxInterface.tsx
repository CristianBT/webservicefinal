import { i_error_state } from './errorInterface';
import { i_auth_state } from './authInterface';
import { i_ui_state } from './uiInterface';
import { i_student_state } from './studentInterface';
import { i_pdf_state } from './pdfInterface';
import { i_driver_state } from './driverInterface';
import { i_h_state } from './horariosInteface';

export default interface i_redux {
    auth: i_auth_state;
    err: i_error_state;
    ui: i_ui_state;
    student: i_student_state;
    pdf: i_pdf_state;
    drivers: i_driver_state;
    horarios: i_h_state;
}