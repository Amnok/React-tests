import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import Item from './Item';
import { getPosts, addPost } from '../store/posts';
import _ from 'lodash';

function ReduxASyncApp() {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => ({
    posts: _.get(state, 'postsReducer.posts'),
  }));
  function onAdd(text) {
    dispatch(addPost(text));
  }
  function handleRemove(noteToRemove) {
    // dispatch(removeNote(noteToRemove));
  }
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log('here', { posts, isLoading });
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <Input onAdd={onAdd} />
      {posts.map((post) => (
        <Item
          key={_.get(post, 'id')}
          post={post}
          onAdd={onAdd}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
}

export default ReduxASyncApp;
