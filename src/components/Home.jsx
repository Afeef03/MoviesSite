import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import axios from 'axios';
import Loader from './Loader';
import ErrorIn from './ErrorIn';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [genre, setGenre] = useState(false);
  const [genre1, setGenre1] = useState("action");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(false);

        let url;

        if (category === "popular") {
          url = `https://api.themoviedb.org/3/movie/popular?api_key=dc17a8ea3e00b27822e294d220850a56`;
        } else if (category === "upcoming") {
          url = `https://api.themoviedb.org/3/movie/upcoming?api_key=dc17a8ea3e00b27822e294d220850a56`;
        } else if (genre1) { // Check if genre1 is defined and not falsy
          url = `https://api.themoviedb.org/3/discover/movie?api_key=dc17a8ea3e00b27822e294d220850a56&with_genres=${genre1}`;
        }

        const { data } = await axios.get(url);
        setMovies(data.results);
        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category]);

  if (error === true) {
    <ErrorIn />
  }

  const changeCategory = (value) => {
    setCategory(value);
  };

  const changeGenre = (value) => {
    setGenre(true);
    setGenre1(value)
  }

  return (
    <div>
      <Hero />
      <div className="container-2 mt-5">
        <div className="features">
          <div className="dropdown">
            <button className="btn text-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              All genres
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item btn" onClick={() => changeGenre(28)}>Action</button></li>
              <li><button className="dropdown-item btn" onClick={() => changeGenre(878)}>Sci-Fi</button></li>
              <li><button className="dropdown-item btn" onClick={() => changeGenre(18)}>Drama</button></li>
              <li><button className="dropdown-item btn" onClick={() => changeGenre(12)}>Adventure</button></li>

            </ul>
          </div>

          <div className="col-2">
            <button className="btn" onClick={() => changeCategory("popular")}>Popular</button>
            <button className="btn" onClick={() => changeCategory("trending")}>Trending</button>
            <button className="btn" onClick={() => changeCategory("upcoming")}>Upcoming</button>
          </div>
        </div>
      </div>

      <div className="container-2">
        <h1 className='mt-5 text-light'>{category === 'upcoming' ? 'Upcoming Movies' : category === 'trending' ? 'Trending movies' : 'Popular Movies'}</h1>
        <div className="row mt-4">
          {loading ? (
            <Loader />
          ) : error ? (
            <ErrorIn />
          ) : (
            movies.map((movie) => (
              <Card
                key={movie.id}
                name={movie.title}
                img={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                release_date={movie.release_date}
                id={movie.id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const Card = ({ name, img, release_date, id }) => {
  return (
    <div className='col-6 col-sm-4 col-lg-3 col-xl-2 mt-2'>
      <Link to={`/movies/${id}`}>
        <div className="card-1">
          <div className="card-image">
            <img src={img} alt="card-img" />
          </div>
          <div className="card-heading">
            <h3 style={{ fontWeight: "500" }}>{name}</h3>
            <div className="card-p">
              <p>Free</p>
              <p>Action</p>
              <p>{release_date}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
