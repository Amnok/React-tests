import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import Item from './Item';
import { getPosts, addPost, removePost } from '../store/posts';
import _ from 'lodash';
import Skeleton from 'react-loading-skeleton';

function ReduxASyncApp() {
  const dispatch = useDispatch();

  const { posts, isLoading } = useSelector((state) => ({
    posts: _.get(state, 'postsReducer.posts'),
    isLoading: _.get(state, 'postsReducer.isLoading'),
  }));

  function onAdd(movie) {
    const values = Object.values(movie);
    if (!values.every((val) => val)) {
      alert('Please fill Out all Values');
    } else {
      dispatch(addPost(movie));
    }
  }
  function handleRemove(postToRemove) {
    dispatch(removePost(postToRemove));
  }
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  console.log('here', { posts, isLoading });
  if (isLoading) return <Skeleton height={60} count={5} />;
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
