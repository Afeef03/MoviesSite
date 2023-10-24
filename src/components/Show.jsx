import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import axios from 'axios';
import Loader from './Loader';
import ErrorIn from './ErrorIn';
import { Link } from 'react-router-dom';

const Show = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true); // Set loading to true when making the request.
        setError(false); // Reset the error state

        let url;

        if (category === "popular") {
          url = `https://api.themoviedb.org/3/tv/popular?api_key=dc17a8ea3e00b27822e294d220850a56`;
        } else if (category === "upcoming") {
          url = `https://api.themoviedb.org/3/tv/upcoming?api_key=dc17a8ea3e00b27822e294d220850a56`;
        }

        const { data } = await axios.get(url);
        setMovies(data.results);
        console.log(data);
      } catch (error) {
        setError(true);
        // alert(error.message);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error.
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

  return (
    <div>
      <div className="container-2 mt-5">
        <div className="features">
          <div className="dropdown">
            <button className="btn text-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              All genres
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
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
        <h1 className='mt-5 text-light'>{category === 'upcoming' ? 'Upcoming Shows' : 'Popular Shows'}</h1>
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
      <Link to={`/tv/${id}`}>
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

export default Show;

