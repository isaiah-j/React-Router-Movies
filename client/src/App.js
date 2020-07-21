import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
import { Link, Route } from 'react-router-dom'
const App = () => {
  const [saved, setSaved] = useState(['lol']); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    return axios.get(`http://localhost:5000/api/movies/${id}`)
    .then(res => res.data)
    .then(data => {
      setSaved([...saved, data])
    })
  };



  return (
    <div>


      <SavedList list={saved} ></SavedList>
      <Route exact path='/' render={() => <MovieList movies={movieList}></MovieList>} ></Route>
      <Route path='/movies/:id' render={(props) => {
        let { id } = props.match.params
        return <Movie
          id={id}
          setSaved={setSaved}
          saved={saved}
          addToSavedList={addToSavedList}>
        </Movie>

      }}></Route>

    </div>
  );
};

export default App;
