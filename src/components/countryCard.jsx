import React from 'react';
import { Card } from "react-bootstrap";

export default function CountryCard({country}) {
    return (
        <Card className="mb-3 bg-secondary text-white">
            {/* Вывод флага */}
            <Card.Body>
                {/* Вывод флага */}
                <Card.Img variant="top" src={country.flags.svg} className="country-flag m-2"/>
                {/* Вывод названия страны */}
                <Card.Title className='m-2 text-center'>{country.name.common}</Card.Title>
            </Card.Body>
        </Card>
    );
}