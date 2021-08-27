import React, { Component } from 'react';
import Logo from './Logo.png';
import './App.css';

class App extends Component {
 render() {
  return (
    <div className="App">
      <header className="App-header">
      <p className="Entrar">Entrar</p>
      <p className="Cadastro">Cadastro</p>
      <p className="Login">Login</p>
      <p className="Linha1">___________________________________</p>
      <p className="Senha">Senha</p>
      <p className="Linha2">___________________________________</p>
      <p className="Esqueceu">Esqueceu a senha?</p>
      <button className="Button">Entrar</button>
      <img src={Logo} className="Image" alt="Logo" />
      </header>      
    </div>
  );
}
}

export default App;
