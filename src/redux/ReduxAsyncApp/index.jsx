import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import Item from './Item';
import { addNote, removeNote, getPosts } from '../actions/actionCreator';
import _ from 'lodash';

function ReduxASyncApp() {
  const dispatch = useDispatch();
  const { notes, posts } = useSelector((state) => ({
    notes: _.get(state, 'notes'),
    posts: _.get(state, 'postsReducer.posts'),
  }));
  function onAdd(text) {
    const note = { id: notes.length + 1, text };
    dispatch(addNote(note));
  }
  function handleRemove(noteToRemove) {
    dispatch(removeNote(noteToRemove));
  }
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log('posts', posts);
  if (!posts) return null;
  return (
    <div>
      <Input onAdd={onAdd} />
      {posts.map((note) => (
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

export default ReduxASyncApp;
