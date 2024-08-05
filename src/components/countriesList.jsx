import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CountryCard from './countryCard';
import { useGeneralStore } from '../store/store';

export default function CountriesList() {
  const { countries, error, clearError } = useGeneralStore();
  // поисковый запрос
  const [searchQuery, setSearchQuery] = useState('');
  // отфильтрованный массив стран
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    // очистка прошлой ошибки
    clearError();
    // фильтрация стран
    setFilteredCountries(
      countries.filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [countries, searchQuery]);

  // вывод ошибки
  if (error) {
    return (
      <Container className="p-4">
        <h2>Error: {error}</h2>
      </Container>
    );
  }

  return (
    <Container className="p-4">
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
          <Col key={country.name.common} xs={12} md={4} lg={3}>
            <Link to={`/country/${country.name.common}`} style={{ textDecoration: 'none' }}>
              <CountryCard country={country} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}