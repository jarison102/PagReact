// Importa los módulos de React necesarios
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Asegúrate de importar 'Routes' y 'Route'

// Importa el componente PaginaRegistro
import PaginaRegistro from './components/PaginaRegistro';
import PaginaLogin from './components/PaginaLogin';

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
    <Router>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/">Tayura</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/registrarse">Registrarse</Nav.Link>
                <Nav.Link as={Link} to="/PaginaLogin">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Utiliza 'Routes' para manejar rutas anidadas */}
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<Inicio usuarios={usuarios} />} />
          {/* Ruta para la página de registro */}
          <Route path="/registrarse" element={<PaginaRegistro onSubmit={handleSubmit} />} />
          <Route path="/PaginaLogin" element={<PaginaLogin onSubmit={handleSubmit} />} />
        </Routes>
      </div>
    </Router>
  );
};

// Componente funcional para la página de inicio
const Inicio = ({ usuarios }) => (
  <div>
    <h1>Lista de Usuarios</h1>
    <ul>
      {usuarios.map(registrodeusuarios => (
        <li key={registrodeusuarios.id}>
          {registrodeusuarios.NamePerson} {registrodeusuarios.LastNamePerson} {registrodeusuarios.Country} {registrodeusuarios.Departament} {registrodeusuarios.Email} {registrodeusuarios.Phone} {registrodeusuarios.DateBirth}
        </li>
      ))}
    </ul>
  </div>
);

// Exporta el componente principal App
export default App;
