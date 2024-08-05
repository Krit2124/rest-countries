import React, { useEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useGeneralStore } from '../store/store';

export default function CountryDetails() {
    // получение названя страны из поискового запроса
    const { name } = useParams();
    const { country, fetchCountryDetails, error, clearError, clearCountry } = useGeneralStore();

    useEffect(() => {
        // очистка прошлых ошибки и выбранной страны
        clearError();
        clearCountry();
        // получение данных о стране
        fetchCountryDetails(name);
    }, []);

    // вывод ошибки
    if (error) {
        return (
        <Container className="p-4">
            <h2>Error: {error}</h2>
            <Link to="/all">
                <Button variant="primary">Go Back</Button>
            </Link>
        </Container>
        );
    }

    // уведомление о загрузке данных
    if (!country) {
        return (
        <Container className="p-4">
            <h2>Loading...</h2>
        </Container>
        );
    }

    return (
        <Container className="p-4">
            <Card className="bg-secondary text-white country-card-detail">
                <Card.Img variant="top"  src={country.flags.svg} className='country-flag-detail' />
                <Card.Body>
                    <Card.Title>{country.name.common}</Card.Title>
                    <Card.Text>Capital: {country.capital ? country.capital[0] : 'N/A'}</Card.Text>
                    <Card.Text>Region: {country.region}</Card.Text>
                    <Card.Text>Area: {country.area.toLocaleString()} km²</Card.Text>
                    <Card.Text>Languages: {Object.values(country.languages || {}).join(', ')}</Card.Text>
                </Card.Body>
            </Card>

            <Link to="/all">
                <Button variant="primary" className="mt-3">Go Back</Button>
            </Link>
      </Container>
    );
};