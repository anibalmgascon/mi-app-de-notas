import React, { useState, useEffect } from 'react';
import Note from './Note';
import NoteEditor from './NoteEditor';
import './App.css';

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes([...notes, { ...newNote, id: Date.now() }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        className="form-control search-box"
        placeholder="Buscador"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <NoteEditor addNote={addNote} />
      {filteredNotes.map(note => (
        <Note key={note.id} {...note} deleteNote={() => deleteNote(note.id)} />
      ))}
    </div>
  );
}

export default NoteList;
