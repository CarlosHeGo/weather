import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { useParams } from 'react-router';
import { Container, Table } from 'react-bootstrap';

function CiudadesDetalle() {

    const { cities } = useContext(WeatherContext);
    const { nombre } = useParams();

    const city = cities.find((c) => c.nombre === nombre);

    return (
        <Container className='v-flex'>
            <h1 className='m-5' style={{textAlign:'center'}}>{city.nombre}</h1>
            <Table>
                <thead>
                    <tr>
                        <th>FECHAS</th>
                        <th>{city.fechas[0].fecha}</th>
                        <th>{city.fechas[1].fecha}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Temperatura</td>
                        <td>Máxima: {city.fechas[0].temperatura.maxima} º - Mínima: {city.fechas[0].temperatura.minima} º</td>
                        <td>Máxima: {city.fechas[1].temperatura.maxima} º - Mínima: {city.fechas[1].temperatura.minima} º</td>
                    </tr>
                    <tr>
                        <td>Viento</td>
                        <td>Velocidad: {city.fechas[0].viento.velocidad} km/h - Dirección: {city.fechas[0].viento.direccion}</td>
                        <td>Máxima: {city.fechas[1].viento.velocidad} km/h - Mínima: {city.fechas[1].viento.direccion}</td>
                    </tr>
                    <tr>
                        <td>Lluvia</td>
                        <td>{city.fechas[0].lluvia} mm</td>
                        <td>{city.fechas[1].lluvia} mm</td>
                    </tr>
                    <tr>
                        <td>Sol</td>
                        <td>Salida: {city.fechas[0].sol.salida}h - Puesta: {city.fechas[0].sol.puesta}h</td>
                        <td>Salida: {city.fechas[1].sol.salida}h - Puesta: {city.fechas[1].sol.puesta}h</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default CiudadesDetalle;