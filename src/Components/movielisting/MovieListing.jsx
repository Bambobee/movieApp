import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, getAllMovies } from '../../feature/movies/movieSlice';
import MovieCard from '../movieCard/MovieCard';
import './movielisting.css';

const MovieListing = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  const renderMovies = movies.Response === 'True' ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
  );

  return (
 
    <div className="movie-wrapper">
         {Object.keys(movies).length === 0 ? (<div><i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>Loading...</div>) :
          (      <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">{renderMovies}</div>
        </div> ) }

    </div>
  );
};

export default MovieListing;