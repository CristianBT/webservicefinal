export interface i_student_state {
    students?: Array<i_student>;
    active?: i_student;
}


export interface i_student_action {
    type: string;
    payload: i_student_state;
}

export interface i_student {
    cedula_estudiante: string,
    apellido_estudiante: string,
    nombre_estudiante: string,
    email_estudiante: string,
    celular_estudiante: string,
    ciudad: city,
    facultade: faculty,
    modalidad: modality,
    semestre: semester,
    horarios: Array<schedule>,
    comentarios?: Array<commentary>
}

export interface city {
    id_ciudad: number;
    nombre: string;
}

interface faculty {
    id_facultad: Number;
    nombre: string;
}

interface modality {
    id_modalidad: Number;
    nombre: string;
    descripcion: string;
}

interface semester {
    id_semestre: Number;
    nombre: string;
}

export interface schedule {
    id_horario: number;
    cedula_estudiante: string;
    nombredia: string;
    horaentrata: string;
    horasalida: string;
}

export interface commentary {
    id_comentario: Number;
    cedula_conductor: String,
    cedula_estudiante: String,
    gradosatisfacion: String,
    descripcion: String
}