import React, {useEffect} from 'react'
import MovieListing from '../movielisting/MovieListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies } from '../../feature/movies/movieSlice'

const Home = () => {

  const dispatch = useDispatch();
  const movieText = 'spider'
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
  }, [dispatch]);

  return (
    <div>
         <div className='banner-img'></div>
         {Object.keys(movieText).length === 0 ? (<div><i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>Loading...</div>) :(<MovieListing />)}
         
    </div>
  )
}

export default Home