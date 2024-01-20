// BasicExample.js
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Componente BasicExample que acepta una función onSubmit como prop
const BasicExample = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      
      {/* Campos del formulario */}
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>NamePerson</Form.Label>
        <Form.Control type="text" name="NamePerson" placeholder="NamePerson" />
        <Form.Text className="text-muted">
          Escribe tu nombre.
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" name="Email" placeholder="Email" />
        <Form.Text className="text-muted">
          Escribe tu email.
        </Form.Text>
      </Form.Group>


      {/* Botón de envío del formulario */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
  );
  
};

export default BasicExample;
