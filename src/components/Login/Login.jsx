import React, { useState } from 'react';
import './Login.css'; 

const Logins = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Iniciar Sesión</button>
        </form>
        <div className="extra-options">
          <a href="/register">¿No tienes cuenta? Regístrate</a>
          <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  );
};

export default Logins;
