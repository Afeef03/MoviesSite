import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MoviesDetails = () => {
  const [moviesDetails, setMoviesDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const apiKey = 'dc17a8ea3e00b27822e294d220850a56'; // Replace with your TMDb API key
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`);
        setMoviesDetails(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchDetails();
  }, [params.id]);

  return (
    <section className='container mt-5 text-light'>
      <Card movie={moviesDetails} />
    </section>
  );
};

const Card = ({ movie }) => {
  if (!movie || !movie.title) {
    return <div>Loading...</div>;
  }

  const { title, tagline, overview, poster_path, status, budget, revenue, genres } = movie;

  return (
    <div className="details">
      <h1 className="text-light title">{title}</h1>
      <h2 className="text-light tag-line">Tagline : "{tagline}"</h2>
      <p className="text-light mt-2 overview">{overview}</p>

      <div className="detail-img mt-3">
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      </div>
      <div className="details-movie mt-4">
        <h4 className="text-light">Status: {status}</h4>
        <h4 className="text-light">Budget: ${budget ? budget : "NA"}</h4>
        <h4 className="text-light">Revenue: ${revenue ? revenue : "NA"}</h4>
      </div>
      <h3 className='text-light mt-5'>Genre:</h3>
      <div className="genre mt-2">
        {genres.map((genre) => (
          <a key={genre.id} href="#">{genre.name}</a>
        ))}
      </div>
    </div>
  );
};

export default MoviesDetails;
