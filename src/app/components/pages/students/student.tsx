import React from 'react';
import { useSelector } from 'react-redux';
import i_redux from '../../../intefaces/reduxInterface';

const Student = () => {

    const { active } = useSelector((info: i_redux) => info.student);

    console.log(active)

    return <>
        <h3 className="text-center">Datos Completos del Estudiante</h3>
        <hr className="my-3" />
        <div className="container">
            <div className="row row-cols-2">
                <div className="col-2">Cedula Estudiante:</div>
                <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.cedula_estudiante, null, 4)}</pre>
                    }
                </div>
                <div className="col-2">Nombre Estudiante:</div>
                <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.nombre_estudiante, null, 4)}</pre>
                    }
                </div>
                <div className="col-2">Apellido Estudiante:</div>
                <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.apellido_estudiante, null, 4)}</pre>
                    }
                </div>
                <div className="col-2">Celular Estudiante:</div>
                <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.celular_estudiante, null, 4)}</pre>
                    }
                </div>
                <div className="col-2">Email Estudiante:</div>
                <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.email_estudiante, null, 4)}</pre>
                    }
                </div>
                <div className="col-2">Ciudad:</div>
                <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.ciudad.nombre, null, 4)}</pre>
                    }
                </div>
                <div className="col-2">Facultad:</div>
                <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.facultade.nombre, null, 4)}</pre>
                    }
                </div>
                <div className="col-2">Semestre:</div>
                <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.semestre.nombre, null, 4)}</pre>
                    }
                </div>
                <div className="col-2">Modalidad de Estudio:</div>
                <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.modalidad.nombre, null, 4)}</pre>
                    }
                </div>
                <div className="col-2">Calificacion del Servicio :</div>



              {/*   <div className="col-10">
                    {
                        <pre>{JSON.stringify(active?.comentarios?.descripcion, null, 4)}</pre>
                    }
                </div> */}


            {/*     <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Comentarios</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Calificacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th ></th>
                            <td></td>
                            <td>Otto</td>

                        </tr>
                    </tbody>
                </table> */}



            </div>
        </div>
        {
            <pre>{JSON.stringify(active, null, 4)}</pre>
        }
    </>
}

export default Student;