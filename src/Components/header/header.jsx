import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../feature/movies/movieSlice';

const Header = () => {
   const [term, setTerm] = useState("");
   const dispatch = useDispatch();
   const submitHandler = (e) => {
    e.preventDefault();
    if(term === "") return alert("Please enter the search term!")
    dispatch(fetchAsyncMovies(term));
    setTerm("")
   }
  return (
    <div className='header'>
      <Link to={'/'}>
        <h1 className='h1'>DENZEL COLLECTIONS</h1>
      </Link>
      <div className='search-part'>
        <form onSubmit={submitHandler}>
          <input className='search' value={term} placeholder='search your Movie from here' onChange={(e) =>setTerm(e.target.value) } />
          <button type='submit' className='button'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Header