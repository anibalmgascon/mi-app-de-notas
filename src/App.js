import React from 'react';
import NoteList from './NoteList';
import './App.css'; // Asegúrate de que esta ruta es correcta para tus estilos

function App() {
  return (
    <div className="App">
      <h1 className="app-title">Aplicación de Notas</h1>
      <NoteList />
    </div>
  );
}

export default App;
