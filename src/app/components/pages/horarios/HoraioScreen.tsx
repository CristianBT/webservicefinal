import React, { useState } from 'react';
import useForm from '../../../hooks/useForm';
import { i_horarios, i_h_consulta } from '../../../intefaces/horariosInteface';
import moment from 'moment';
import TimeKeeper from 'react-timekeeper';
import { useDispatch, useSelector } from 'react-redux';
import { startingGetHorarios } from '../../../actions/horarios';
import i_redux from '../../../intefaces/reduxInterface';
import Loading from '../../ui/loading';
import { startLoading } from '../../../actions/ui';


const Afluencia = () => {

    const date = moment().hour(0).minute(0).second(0);

    const dispatch = useDispatch();
    const { horarios: { horarios }, ui: { loading } } = useSelector((info: i_redux) => info);
    console.log(horarios)


    const init: i_h_consulta = {
        nombredia: 'Lunes',
        horaentrada: date.format('H:mm'),
        horadalida: date.hour(5).format('H:mm'),
    }

    const [showTimeStart, setShowTimeStart] = useState(false);
    const [showTimeEnd, setShowTimeEnd] = useState(false);

    const [horaentrada, setHoraEntrada] = useState(init.horaentrada);
    const [horadalida, setHoraSalida] = useState(init.horadalida);

    const [values, handleInputChange] = useForm(init);
    const { nombredia } = values;

    const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

    const handleSubmit = (e: Event) => {
        e.preventDefault();

        values.horaentrada = horaentrada;
        values.horadalida = horadalida;
        dispatch(startingGetHorarios(values));
        dispatch(startLoading());
    }

    return <>
        <form onSubmit={handleSubmit as any}>
            <div className='mb-3'>
                <h3 className="text-center">Afluencia</h3>
                <h5 className="">Seleccione los filtros</h5>
                <hr className="my-3" />
                <h6>Dia de la semana:</h6>
                <select className="form-select form-select-lg mb-2" aria-label=".form-select-lg example" name='nombredia' value={nombredia} onChange={handleInputChange}>
                    {
                        dias.map((dia: any) => (
                            <option key={dia} value={dia}> {dia}</option>
                        ))
                    }
                </select>
            </div>
            <div className='mb-3'>
                <button type='button' className="btn btn-outline-secondary btn-lg" onClick={() => setShowTimeStart(!showTimeStart)}>Hora Entrada</button>
                {
                    showTimeStart && <TimeKeeper
                        time={horaentrada}
                        onChange={(newTime) => setHoraEntrada(newTime.formatted24)}
                        hour24Mode={true}
                    />
                }
            </div>
            <div className='mb-3'>
                <button type='button' className="btn btn-outline-secondary btn-lg" onClick={() => setShowTimeEnd(!showTimeEnd)}>Hora Salida</button>
                {
                    showTimeEnd && <TimeKeeper
                        time={horadalida}
                        onChange={(newTime) => setHoraSalida(newTime.formatted24)}
                        hour24Mode={true}
                    />
                }
            </div>
            <button type="submit" className="btn btn-warning btn-lg">Consultar</button>
        </form>
        <br /><br />



        <div className="col-2"><strong>Listado</strong> </div>
        <table className="table table-bordered ">
            <thead>
                <tr>
                    <th scope="col">Cedula Estudiante</th>
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
                                ? horarios.map((hora: i_horarios, key: number) =>
                                    <pre key={key}>{JSON.stringify(hora.cedula_estudiante, null, 4)}</pre>)
                                : <div>No Existe Datos </div>
                        }

                    </td>
                    <td>
                        {
                            (horarios && horarios.length > 1)
                                ? horarios.map((hora: i_horarios, key: number) =>
                                    <pre key={key}>{JSON.stringify(hora.nombredia, null, 4)}</pre>)
                                : <div>No Existe Datos </div>
                        }

                    </td>
                    <td>
                        {
                            (horarios && horarios.length > 1)
                                ? horarios.map((hora: i_horarios, key: number) =>
                                    <pre key={key}>{JSON.stringify(hora.horaentrata, null, 4)}</pre>)
                                : <div>No Existe Datos </div>
                        }

                    </td>
                    <td>
                        {
                            (horarios && horarios.length > 1)
                                ? horarios.map((hora: i_horarios, key: number) =>
                                    <pre key={key}>{JSON.stringify(hora.horasalida, null, 4)}</pre>)
                                : <div>No Existe Datos </div>
                        }

                    </td>
                </tr>
            </tbody>
        </table>

        {/*         {
            loading
                ? <Loading type='spin' color='#48f542' />
                : <pre>{JSON.stringify(horarios, null, 4)}</pre>

        } */}






    </>
}


export default Afluencia;