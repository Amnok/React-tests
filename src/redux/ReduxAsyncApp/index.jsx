import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import Item from './Item';
import { getMovies, addMovie, removeMovie } from '../store/movies';
import _ from 'lodash';
import Skeleton from 'react-loading-skeleton';

function ReduxASyncApp() {
  const dispatch = useDispatch();

  const { movies, isLoading } = useSelector((state) => ({
    movies: _.get(state, 'moviesReducer.movies'),
    isLoading: _.get(state, 'moviesReducer.isLoading'),
  }));

  function onAdd(movie) {
    const values = Object.values(movie);
    if (!values.every((val) => val)) {
      alert('Please fill Out all Values');
    } else {
      dispatch(addMovie(movie));
    }
  }
  function handleRemove(postToRemove) {
    dispatch(removeMovie(postToRemove));
  }
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  console.log('here', { movies, isLoading });
  if (isLoading) return <Skeleton height={60} count={5} />;
  return (
    <div>
      <Input onAdd={onAdd} />
      {movies.map((post) => (
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
