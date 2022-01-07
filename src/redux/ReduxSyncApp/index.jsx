import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import Item from './Item';
import { addNote, removeNote } from '../actions/actionCreator';
import _ from 'lodash';

function ReduxSyncApp() {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => ({
    notes: _.get(state, 'notesReducer.notes'),
  }));
  const state = useSelector((state) => state);
  console.log(state);
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
