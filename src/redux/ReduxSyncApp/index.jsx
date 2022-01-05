import React, { useState } from 'react';
import Input from './Input';
import Item from './Item';

function ReduxSyncApp() {
  const [notes, setNotes] = useState(() => {
    return [
      { id: 1, text: 'This is first Note' },
      { id: 2, text: 'This is second Note' },
      { id: 3, text: 'This is third Note' },
      { id: 4, text: 'This is fourth Note' },
    ];
  });
  function onAdd(text) {
    setNotes([...notes, { id: notes.length + 1, text }]);
  }
  function handleRemove(noteToRemove) {
    setNotes(notes.filter((note) => note.id !== noteToRemove.id));
  }
  return (
    <div>
      <Input onAdd={onAdd} />
      {notes.map((note) => (
        <Item note={note} onAdd={onAdd} handleRemove={handleRemove} />
      ))}
    </div>
  );
}

export default ReduxSyncApp;
