import React from 'react';
import { Card } from "react-bootstrap";

export default function CountryCard({country}) {
    return (
        <Card className="mb-3 bg-secondary text-white">
            <Card.Img variant="top" src={country.flags.svg} className="country-flag"/>
            <Card.Body>
                <Card.Title>{country.name.common}</Card.Title>
            </Card.Body>
        </Card>
    );
}