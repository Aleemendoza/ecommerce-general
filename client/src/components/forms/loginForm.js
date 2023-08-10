import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUsuario } from '../../actions/actionLogin';
import './loginForm.css';

function validate(input) {
  let errors = {};
  if (!input.email) {
    errors.email = 'Email requerido';
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = 'Email invalido';
  }
  if (!input.password) {
    errors.password = 'Contraseña requerida';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Contraseña invalida';
  }
  return errors;
}

function FormUsuario(props) {
  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = function (e) {
    const newInput = {
      ...input,
      [e.target.name]: e.target.value
    };

    setInput(newInput);
    setErrors(validate(newInput));
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      props.loginUsuario(input)
        .then(data => {
          if (data) {
            props.history.push('/catalogue');
          }
        });
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Email"
            className={errors.email && 'danger'}
            type="text"
            name="email"
            value={input.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="danger">{errors.email}</p>}
        </div>
        <p></p>
        <div>
          <input
            placeholder="Password"
            className={errors.password && 'danger'}
            type="password"
            name="password"
            value={input.password}
            onChange={handleInputChange}
          />
          {errors.password && <p className="danger">{errors.password}</p>}
        </div>
        <p></p>
        <input className="btn btn-primary" type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default connect(null, { loginUsuario })(FormUsuario);
