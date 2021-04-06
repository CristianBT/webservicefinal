import React from 'react';
import { useSelector } from 'react-redux';
import i_redux from '../../../intefaces/reduxInterface';
import { schedule, commentary, i_student } from '../../../intefaces/studentInterface';

const Student = () => {

    const { active } = useSelector((info: i_redux) => info.student);
    const { comentarios } = active as i_student;
    const { horarios } = active as i_student;


    console.log(horarios)

    return <>
        <h3 className="text-center">Datos Completos del Estudiante</h3>
        <hr className="my-3" />
        <div className="container">
            <div className="row row-cols-2">
                <div className="col-2"> <strong>Cedula Estudiante:</strong> </div>
                <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.cedula_estudiante, null, 4)}</pre>
                    }
                    <hr className="my-1" />
                </div>
                <div className="col-2"> <strong>Nombre Estudiante:</strong> </div>
                <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.nombre_estudiante, null, 4)}</pre>
                    }
                    <hr className="my-1" />
                </div>
                <div className="col-2"> <strong>Apellido Estudiante:</strong> </div>
                <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.apellido_estudiante, null, 4)}</pre>
                    }
                    <hr className="my-1" />
                </div>
                <div className="col-2"> <strong>Celular Estudiante:</strong> </div>
                <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.celular_estudiante, null, 4)}</pre>
                    }
                    <hr className="my-1" />
                </div>
                <div className="col-2"> <strong>Email Estudiante:</strong> </div>
                <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.email_estudiante, null, 4)}</pre>
                    }
                    <hr className="my-1" />
                </div>
                <div className="col-2"> <strong>Ciudad:</strong> </div>
                <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.ciudad.nombre, null, 4)}</pre>
                    }
                    <hr className="my-1" />
                </div>
                <div className="col-2"> <strong>Facultad:</strong> </div>
                <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.facultade.nombre, null, 4)}</pre>
                    }
                    <hr className="my-1" />
                </div>
                <div className="col-2"><strong> Semestre:</strong></div>
                <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.semestre.nombre, null, 4)}</pre>
                    }
                    <hr className="my-1" />
                </div>
                <div className="col-2"> <strong>Modalidad de Estudio:</strong> </div>
                <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.modalidad.nombre, null, 4)}</pre>
                    }
                    <hr className="my-1" />
                </div>
                <div className="col-2"> <strong>Calificacion del Servicio:</strong> </div>
                <div className="col-10">
                    {
                        (comentarios && comentarios.length > 1)
                            ? comentarios.map((comentario: commentary, key: number) =>
                                <pre key={key}>{JSON.stringify(comentario.gradosatisfacion, null, 4)}</pre>)
                            : <div>No Existe Datos </div>
                    }
                  <hr className="my-1" />
                </div>
                <div className="col-2"><strong>Horario</strong> </div>
                <table className="table table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col">Dia de la Semana</th>
                            <th scope="col">Hora de Entrada</th>
                            <th scope="col">Hora de Salida</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >
                                {
                                    (horarios && horarios.length > 1)
                                        ? horarios.map((hora: schedule, key: number) =>
                                            <pre key={key}>{JSON.stringify(hora.nombredia, null, 4)}</pre>)
                                        : <div>no existe datos </div>
                                }
                            </td>
                            <td>
                                {
                                    (horarios && horarios.length > 1)
                                        ? horarios.map((hora: schedule, key: number) =>
                                            <pre key={key}>{JSON.stringify(hora.horaentrata, null, 4)}</pre>)
                                        : <div>no existe datos </div>
                                }
                              
                            </td>
                            <td>
                                {
                                    (horarios && horarios.length > 1)
                                        ? horarios.map((hora: schedule, key: number) =>
                                            <pre key={key}>{JSON.stringify(hora.horasalida, null, 4)}</pre>)
                                        : <div>no existe datos </div>
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        {/*         {

            <pre>{JSON.stringify(active, null, 4)}</pre>
        } */}

    </>
}

export default Student;