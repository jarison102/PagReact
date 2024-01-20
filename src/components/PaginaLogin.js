import React from 'react';
import BasicExample from './FormularioLogin';

const Login = ({ onSubmit }) => {
  return (
    <div>
      <h1>Login</h1>
      <BasicExample onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
