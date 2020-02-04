import React from 'react';
import './App.css';
import DinamicTable from './components/DinamicTable';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import MiLista from './components/MiLista';
class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <MiLista/> 
      </div>
    );  
  }
}

export default App;
