import React from 'react';
import BasicExample from './BasicExample';

const PaginaRegistro = ({ onSubmit }) => {
  return (
    <div>
      <h1>Registro de Usuarios</h1>
      <BasicExample onSubmit={onSubmit} />
    </div>
  );
};

export default PaginaRegistro;
