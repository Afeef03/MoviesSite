import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";


const Navbar = ({ setSearchResults }) => {
    const [searchText, setSearchText] = useState('');
    // const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent the form from submitting

        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=dc17a8ea3e00b27822e294d220850a56&query=${searchText}`);
            // console.log('API response:', data); // Log the API response
            setSearchResults(data.results);
            // setLoading(false);

            // Navigate to the search results page
            navigate('/search');
        } catch (error) {
            console.error('Error searching:', error);
            // setLoading(false);
        }
    };

    


    return (
        <div>
            <nav className="navbar navbar-expand-lg text-light ">
                <div className="container">
                    <img src="/images/logo.svg" alt="" className="navbar-brand" />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/movies">
                                    Movies
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shows">
                                    Shows
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={handleSearch}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="I'm Looking For..."
                                aria-label="Search"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                            <button className="btn btn-outline-primary" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
