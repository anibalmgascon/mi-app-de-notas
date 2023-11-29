import React from 'react';
import './App.css';

function Note({ id, title, content, deleteNote }) {
  return (
    <div className="note">
      <h5 className="note-title">{title}</h5>
      <p>{content}</p>
      <button className="btn btn-delete" onClick={deleteNote}>Eliminar</button>
    </div>
  );
}

export default Note;
