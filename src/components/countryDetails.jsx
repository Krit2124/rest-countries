import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useGeneralStore } from '../store/store';

export default function CountryDetails() {
    const { name } = useParams();
    const { country, fetchCountryDetails, error, clearError } = useGeneralStore();

    useEffect(() => {
        fetchCountryDetails(name);
        return () => clearError();
    }, [fetchCountryDetails, name]);

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

    if (!country) {
        return (
        <Container className="p-4">
            <h2>Loading...</h2>
        </Container>
        );
    }

    return (
        <Container className="p-4 main-container">
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