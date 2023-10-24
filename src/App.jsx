import './App.css';
import './components/responsive.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Home from './components/Home';
import Loader from './components/Loader';
import MoviesDetails from './components/MoviesDetails';
import Footer from './components/Footer';
import Show from './components/Show';
import ShowDetails from './components/ShowDetails';
import SearchResults from './components/SearchResults';
import { useState } from 'react';
import TopButton from './components/TopButton';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  return (
    <>
      <Router>
      <Navbar setSearchResults={setSearchResults} />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/shows" element={<Show />} />
          <Route path="/movies/:id" element={<MoviesDetails />} />
          <Route path="/tv/:id" element={<ShowDetails />} />
          <Route path="/search" element={<SearchResults searchResults={searchResults} />} />
        </Routes>
      <TopButton />
        <Footer />
      </Router>
    </>
  );
}

export default App;
