import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from './Input';
import Item from './Item';
import { getMovies, addMovie, removeMovie, editMovie } from '../store/movies';
import _ from 'lodash';
import Skeleton from 'react-loading-skeleton';

function ReduxASyncApp() {
  const dispatch = useDispatch();
  const [editedMovie, setEditedeMovie] = useState({});
  const { movies, isLoading } = useSelector((state) => ({
    movies: _.get(state, 'moviesReducer.movies'),
    isLoading: _.get(state, 'moviesReducer.isLoading'),
  }));

  function onAdd(movie, isEdit) {
    console.log(movie);
    const values = Object.values(movie);
    console.log(values);
    if (!values.every((val) => val)) {
      alert('Please fill Out all Values');
    } else {
      if (isEdit) {
        dispatch(editMovie(movie));
        setEditedeMovie({});
      } else {
        dispatch(addMovie(movie));
      }
    }
  }
  function handleRemove(postToRemove) {
    dispatch(removeMovie(postToRemove));
  }
  function handleEdit(movie) {
    setEditedeMovie(movie);
    console.log(movie);
  }
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  if (isLoading) return <Skeleton height={60} count={5} />;
  return (
    <div>
      <Input onAdd={onAdd} editMovie={editedMovie} />
      {movies.map((post) => (
        <Item
          key={_.get(post, 'id')}
          post={post}
          onAdd={onAdd}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default ReduxASyncApp;
