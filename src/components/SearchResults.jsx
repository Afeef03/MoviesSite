import React from 'react';
import { Link } from 'react-router-dom';
import NoPage from './NoPage';

const SearchResults = ({ searchResults }) => {
    console.log(searchResults);
    if(searchResults.length === 0){
        return <NoPage />
    }
    return (
        <section className="container mt-5">

            <div className='row mt-4'>
                {searchResults ? (
                    searchResults.map((result) => (
                       <Card 
                       name={result.original_title}
                        id = {result.id}
                        genre = {result.genre_ids}
                        poster_path={result.poster_path}
                       />
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </section>
    );
};

const Card = ({ name, id, genre, poster_path }) => {
    const imageUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : ''; // Construct the image URL

    return (
        <div className='col-6 col-sm-4 col-lg-3 col-xl-2 mt-2'>
            <Link to={`/movies/${id}`}>
                <div className="card-1">
                    <div className="card-image">
                        <img src={imageUrl} alt={name} /> {/* Use the provided imageUrl in the <img> tag */}
                    </div>
                    <div className="card-heading">
                        <h3 style={{ fontWeight: "500" }}>{name}</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
}


export default SearchResults;
