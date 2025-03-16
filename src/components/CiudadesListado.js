import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { Button, Card, Carousel, CarouselCaption, CarouselItem, Container, Image } from 'react-bootstrap';

function CiudadesListado() {

    const { cities, selectedCity, setSelectedCity } = useContext(WeatherContext);

    return (
        <Container fluid>
            <Carousel className='m-5' variant='dark'>
                {selectedCity && selectedCity.fechas.map((datosCiudad, index) => (
                    <CarouselItem key={index}>
                        <Image src={`/${selectedCity.nombre}.png`} className='mx-auto d-block' />
                        <CarouselCaption>
                            <Card style={{ backgroundColor: ' rgba(255, 255, 255, 0.7)' }}>
                                <Card.Title>
                                    {selectedCity.nombre}
                                </Card.Title>
                                <Card.Body>
                                    <p>{datosCiudad.fecha}</p>
                                    <p>Temperatura máxima {datosCiudad.temperatura.maxima}º</p>
                                    <p>Temperatura mínima {datosCiudad.temperatura.minima}º</p>
                                    <p>Velocidad del viento {datosCiudad.viento.velocidad} km/h</p>
                                    <p>Dirección del viento {datosCiudad.viento.direccion}</p>
                                </Card.Body>
                            </Card>
                        </CarouselCaption>
                    </CarouselItem>
                ))}
            </Carousel>
            <ul>
                {cities.map((city, index) => (
                    <li key={index}>
                        {city.nombre}
                        <Button variant='secondary' className='mx-3' onClick={() => setSelectedCity(city)}>Seleccionar</Button>
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default CiudadesListado