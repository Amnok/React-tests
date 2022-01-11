import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import Item from './Item';
import { addNote, removeNote, getNotes } from '../store/notes-devtools';
import _ from 'lodash';

function ReduxSyncApp() {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => ({
    notes: _.get(state, 'notesReducer.notes'),
  }));

  useEffect(() => {
    dispatch(getNotes());
  }, []);
  function onAdd(text) {
    const note = { id: notes.length + 1, text };
    dispatch(addNote(note));
  }
  function handleRemove(noteToRemove) {
    dispatch(removeNote(noteToRemove));
  }

  console.log('notes', notes);
  if (!notes) return null;
  return (
    <div>
      <Input onAdd={onAdd} />
      {notes.map((note) => (
        <Item
          key={_.get(note, 'id')}
          note={note}
          onAdd={onAdd}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
}

export default ReduxSyncApp;
