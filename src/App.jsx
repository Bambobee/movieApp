import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/home/Home';
import MovieDetail from './Components/movieDetail/MovieDetail';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Footer from './Components/footer/footer';
import Header from './Components/header/header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
        <Routes>
         <Route path='/' exact Component={Home} />
          <Route path='/movie/:imdbID' Component={MovieDetail} />
          <Route path="*" Component={PageNotFound} />
         </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
