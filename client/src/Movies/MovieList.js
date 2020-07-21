import React from 'react';

import {Link, Route} from 'react-router-dom'


const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} id={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function redirect(){

}

function MovieDetails({ movie, id }) {
  const { title, director, metascore } = movie;
  return (
    <Link to={`/movies/${id}`} className='clear-default'>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </Link>
   
  );
}

export default MovieList;
