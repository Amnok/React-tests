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
  const [movie, setMovie] = useState({
    name: '',
    details: '',
    genre: '',
    rating: '',
  });

  useEffect(() => {
    if (editMovie) {
      const { name, details, genre, rating } = editMovie;
      setMovie({
        name,
        details,
        genre,
        rating,
      });
    }
  }, [editMovie]);
  const handleOnClick = () => {
    const { name, details, genre, rating } = movie;
    const tempMovie = {
      id: editMovie.id,
      name,
      details,
      genre,
      rating,
    };
    const isEdit = _.isEmpty(editMovie) ? false : true;
    const _movie = !isEdit ? _.omit(tempMovie, ['id']) : tempMovie;
    onAdd(_movie, isEdit);
  };
  return (
    <div style={conatinerStyle}>
      <label htmlFor="name">Movie Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter Movie Name here"
        value={movie.name}
        onChange={(e) =>
          setMovie({ ...movie, [e.target.name]: e.target.value })
        }
      />

      <label htmlFor="details">Movie Details</label>
      <textarea
        id="details"
        name="details"
        cols="30"
        rows="10"
        value={movie.details}
        placeholder="Enter Movie Details here"
        onChange={(e) =>
          setMovie({ ...movie, [e.target.name]: e.target.value })
        }
      ></textarea>

      <label htmlFor="genre">Genre</label>
      <select
        id="genre"
        name="genre"
        onChange={(e) =>
          setMovie({ ...movie, [e.target.name]: e.target.value })
        }
        value={movie.genre}
      >
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Thriller">Thriller</option>
        <option value="Horror">Horror</option>
      </select>

      <label htmlFor="rating">Rating</label>
      <select
        id="rating"
        name="rating"
        onChange={(e) =>
          setMovie({ ...movie, [e.target.name]: e.target.value })
        }
        value={movie.rating}
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
