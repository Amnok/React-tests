import React, { useState, useEffect } from 'react';
import _ from 'lodash';

function Input({ onAdd, editMovie }) {
  console.log({ editMovie });
  const conatinerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '2px',
    marginTop: '20px',
    width: '50%',
    marginLeft: '25%',
  };

  useEffect(() => {
    if (editMovie) {
      const { name, detail, genre, rating } = editMovie;
      setMovieName(name);
      setMovieDetail(detail);
      setMovieGenre(genre);
      setMovieRating(rating);
    }
  }, [editMovie]);
  const [movieName, setMovieName] = useState('');
  const [movieDetail, setMovieDetail] = useState('');
  const [movieGenre, setMovieGenre] = useState('');
  const [movieRating, setMovieRating] = useState('');
  const handleOnClick = () => {
    const movie = {
      id: editMovie.id,
      name: movieName,
      detail: movieDetail,
      genre: movieGenre,
      rating: movieRating,
    };
    const isEdit = _.isEmpty(editMovie) ? false : true;
    const _movie = !isEdit ? _.omit(movie, ['id']) : movie;
    onAdd(_movie, isEdit);
  };
  return (
    <div style={conatinerStyle}>
      <label htmlFor="movieName">Movie Name</label>
      <input
        type="text"
        name="movieName"
        id="movieName"
        placeholder="Enter Movie Name here"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />

      <label htmlFor="movieDetails">Movie Details</label>
      <textarea
        id="movieDetails"
        name="movieDetails"
        cols="30"
        rows="10"
        value={movieDetail}
        placeholder="Enter Movie Details here"
        onChange={(e) => setMovieDetail(e.target.value)}
      ></textarea>

      <label htmlFor="genre">Genre</label>
      <select
        id="genre"
        onChange={(e) => setMovieGenre(e.target.value)}
        value={movieGenre}
      >
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Thriller">Thriller</option>
        <option value="Horror">Horror</option>
      </select>

      <label htmlFor="rating">Rating</label>
      <select
        id="rating"
        onChange={(e) => setMovieRating(e.target.value)}
        value={movieRating}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={handleOnClick}>
        {_.isEmpty(editMovie) ? 'Add' : 'Update'}
      </button>
    </div>
  );
}

export default Input;
