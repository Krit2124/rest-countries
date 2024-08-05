import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CountryCard from './countryCard';
import { useGeneralStore } from '../store/store';

export default function CountriesList() {
  const { countries, error } = useGeneralStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setFilteredCountries(
      countries.filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [countries, searchQuery]);

  if (error) {
    return (
      <Container className="p-4">
        <h2>Error: {error}</h2>
      </Container>
    );
  }

  return (
    <Container className="p-4 main-container">
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search by country name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form>

      <Row>
        {filteredCountries.map((country) => (
          <Col key={country.cca3} xs={12} md={4} lg={3}>
            <Link to={`/country/${country.name.common}`} style={{ textDecoration: 'none' }}>
              <CountryCard country={country} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}