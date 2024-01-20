import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { actualizarDepartamentos } from './AnimacionesFltar/Filtrar';
import axios from 'axios';

// Definir la lista de opciones de cargos (cargoOptions) aquí o importarla desde donde esté definida
const cargoOptions = [
  { id: 1, Cargos: 'Administrador' },
  { id: 2, Cargos: 'Usuario' },
  // Agrega más opciones según sea necesario
];

const BasicExample = ({ onSubmit }) => {
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
      Cargo: event.target.Cargo.value, // Asegúrate de tener el campo "Cargo" en tu formulario
    };

    // Mapea el nombre del cargo seleccionado al ID correspondiente
    const idCargoMap = {
      'Administrador': 1,
      'Usuario': 2,
      // Agrega más mapeos según sea necesario
    };

    try {
      // Asigna el ID correspondiente al cargo seleccionado
      formData.id_cargo = idCargoMap[formData.Cargo];

      // Envía los datos del formulario al servidor Express
      const response = await axios.post('http://localhost:3001/registrodeusuarios', formData);
      console.log(response.data);

      // Vuelve a obtener la lista de usuarios después de agregar uno nuevo
      const updatedUsers = await axios.get('http://localhost:3001/registrodeusuarios');
      // setUsuarios(updatedUsers.data); // Asegúrate de tener setUsuarios definido en tu componente padre si es necesario
    } catch (error) {
      console.error('Error al enviar datos:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Campos del formulario */}
      <Form.Group className="mb-3 ">
        <Form.Label>NamePerson</Form.Label>
        <Form.Control type="text" name="NamePerson" placeholder="NamePerson" />
        <Form.Text className="text-muted">
          Escribe tu nombre.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>LastNamePerson</Form.Label>
        <Form.Control type="text" name="LastNamePerson" placeholder="LastNamePerson" />
        <Form.Text className="text-muted">
          Escribe tu apellido.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" name="Country" placeholder="Country" id="nuevo_Pais" onChange={actualizarDepartamentos}/>
        <Form.Text className="text-muted">
          Escribe tu País.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Departament</Form.Label>
        <Form.Select type="text" name="Departament" placeholder="Departament" id="nuevo_Departamento"/>
        <Form.Text className="text-muted">
          Escribe tu departamento.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" name="Email" placeholder="Email" />
        <Form.Text className="text-muted">
          Escribe tu email.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" name="Phone" placeholder="Phone" />
        <Form.Text className="text-muted">
          Escriba tu numero de celular.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>DateBirth</Form.Label>
        <Form.Control type="date" name="DateBirth" placeholder="DateBirth" />
        <Form.Text className="text-muted">
          Escribe tu Fecha de nacimiento.
        </Form.Text>
      </Form.Group>

      {/* ... (otros campos del formulario) ... */}

      <Form.Group className="mb-3">
        <Form.Label>Cargo</Form.Label>
        <Form.Select name="Cargo" placeholder="Cargo" id="id_cargo">
          {cargoOptions.map(cargo => (
            <option key={cargo.id} value={cargo.Cargos}>
              {cargo.Cargos}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      {/* Botón de envío del formulario */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default BasicExample;
