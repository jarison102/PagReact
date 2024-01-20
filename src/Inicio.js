// Importa los módulos de React necesarios
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Importa los componentes necesarios
import PaginaRegistro from './components/PaginaRegistro';

// Define el componente principal App
const App = () => {
  // Estado para almacenar la lista de usuarios
  const [usuarios, setUsuarios] = useState([]);

  // Efecto para cargar la lista de usuarios al montar el componente
  useEffect(() => {
    axios.get('http://localhost:3001/registrodeusuarios')
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error('Error al obtener usuarios:', error);
      });
  }, []); // El segundo argumento [] significa que este efecto se ejecuta solo al montar el componente

  // Maneja el envío del formulario de registro
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Obtiene los valores del formulario
    const formData = {
      NamePerson: event.target.NamePerson.value,
      LastNamePerson: event.target.LastNamePerson.value,
      Country: event.target.Country.value,
      Departament: event.target.Departament.value,
      Email: event.target.Email.value,
      Phone: event.target.Phone.value,
      DateBirth: event.target.DateBirth.value,
    };

    try {
      // Envía los datos del formulario al servidor Express
      const response = await axios.post('http://localhost:3001/registrodeusuarios', formData);
      console.log(response.data);

      // Vuelve a obtener la lista de usuarios después de agregar uno nuevo
      const updatedUsers = await axios.get('http://localhost:3001/registrodeusuarios');
      setUsuarios(updatedUsers.data);
    } catch (error) {
      console.error('Error al enviar datos:', error);
    }
  };

  // Renderiza el componente principal
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Tayura</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Registrarse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map(registrodeusuarios => (
          <li key={registrodeusuarios.id}>
            {registrodeusuarios.NamePerson} {registrodeusuarios.LastNamePerson} {registrodeusuarios.Country} {registrodeusuarios.Departament} {registrodeusuarios.Email} {registrodeusuarios.Phone} {registrodeusuarios.DateBirth}
          </li>
        ))}
      </ul>

      {/* Renderiza el formulario de registro */}
      <PaginaRegistro onSubmit={handleSubmit} />
    </div>
  );
};

// Exporta el componente principal App
export default App;
