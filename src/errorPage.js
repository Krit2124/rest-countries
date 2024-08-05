import React from 'react';
import { Button } from 'react-bootstrap';

export default function ErrorPage() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-white">
      <h1 className="mb-4">An unexpected error has occurred</h1>
      <Button variant="light" onClick={() => window.history.back()}>
        Go Back
      </Button>
    </div>
  );
}