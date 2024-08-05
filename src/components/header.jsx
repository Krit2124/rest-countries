import React from 'react';
import { Navbar, Container, Form } from 'react-bootstrap';
import { useGeneralStore } from '../store/store';

export default function Header() {
  // поисковый запрос
  const { searchQuery, setSearchQuery } = useGeneralStore();

  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/" className='mx-3'>REST Countries</Navbar.Brand>
        <Form className="flex-grow-1 mx-3">
          <Form.Control
            type="text"
            placeholder="Search by country name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form>
      </Container>
    </Navbar>
  );
};