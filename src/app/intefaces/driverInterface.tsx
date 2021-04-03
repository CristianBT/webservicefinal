
export interface vehicle {
    id_vehiculo: number,
    cedula_conductor: string,
    placavehiculo: string,
    marca: string,
    capacidad: string
}

export interface routes {
    id_recorrido: number,
    id_vehiculo: number,
    cedula_conductor: string,
    id_destinos: number,
    fecha: string,
    estado: boolean
}

export interface i_driver {
    cedula_conductor: string,
    apellido_conductor: string,
    nombre_conductor: string,
    email_conductor: string,
    state_conductor: boolean,
    linkcontrato_conductor?: string,
    numerorecorridomaximo: number,
    celular_conductor: string,
    vehiculos?: Array<vehicle>,
    recorridos?: Array<routes>
}

export interface i_driver_state {
    drivers?: Array<i_driver>;
    active?: i_driver;
    openModal?: boolean;
    update?: i_driver;
}



export interface i_driver_action {
    type: string;
    payload?: i_driver_state;
}