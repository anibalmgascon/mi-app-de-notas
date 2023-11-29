import React, { useState } from 'react';
import './App.css';

function NoteEditor({ addNote }) {
  const [note, setNote] = useState({ title: '', content: '' });

  const handleSubmit = () => {
    if (!note.title || !note.content) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    addNote(note);
    setNote({ title: '', content: '' }); // Limpiar el formulario
  };

  return (
    <div className="note-input">
      <h3>Insertar Nota</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Título"
        value={note.title}
        onChange={e => setNote({ ...note, title: e.target.value })}
      />
      <textarea
        className="form-control"
        placeholder="Nota"
        value={note.content}
        onChange={e => setNote({ ...note, content: e.target.value })}
      />
      <button className="btn btn-save" onClick={handleSubmit}>Guardar</button>
    </div>
  );
}

export default NoteEditor;
