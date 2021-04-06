import { city } from './studentInterface';

export interface i_h_state {
    horarios?: Array<i_horarios>
  
    
}

export interface i_horarios {
    id_horario          : number, 
    cedula_estudiante   : string,
    nombredia           : string,
    horaentrata         : string,
    horasalida          : string,
    estudiante          : i_h_student
}

export interface i_h_student {
    cedula_estudiante   : string;
    apellido_estudiante : string;
    nombre_estudiante   : string;
    email_estudiante    : string;
    ciudad              : city;
}


export interface i_h_action {
    type: string;
    payload?: i_h_state;
}

export interface i_h_consulta {
    nombredia   : typeDia;
    horaentrada : string;
    horadalida  : string;
}

type typeDia =  'Lunes' | 'Martes' | 'Miercoles' | 'Jueves' | 'Viernes' | 'Sabado' | 'Domingo'