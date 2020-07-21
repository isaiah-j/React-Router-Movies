import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'


const getMovie = id => {
  axios.get(`http://localhost:5000/api/movies/${id}`)
    .then((res) => res.data)
    .then((data) => {
      return data
    })
    .catch(() => {

    })
}



const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => {
      return <Link to={`/movies/${movie.id}`} className='clear-default saved-movie' >{movie.title}</Link>
    })}
    <Link to='/' className='clear-default'>Home</Link>
  </div>
);

export default SavedList;
