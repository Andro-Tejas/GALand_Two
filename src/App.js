import React from 'react'
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import MovieCard from './components/MovieCard/MovieCard'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MovieDetail from './components/MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


/*

  imports 
  
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import Header from './containers/Header';

Routes changing code:
<Router>
  <Header />
  <Routes>
    <Route path="/" element={<ProductListing />} />
    <Route path="/product/:productId" element={<ProductDetails />} />
    <Route>404 not found!</Route>
   </Routes>
</Router>
*/