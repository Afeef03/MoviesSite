import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="container-1 mt-lg-5">
            <div className="row">
                {/* ==============1=============== */}
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <Link to="/movies/245891" >
                        <div className="first-col col">
                            <h2>Jhon Wick</h2>
                            <div className="low-heading">
                                <h5>Netflix</h5>
                                <h5>Action</h5>
                                <h5>2021</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* ==============2=============== */}
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <Link to="movies/324786" >
                        <div className="second-col col">
                            <h2>Hacksaw Ridge</h2>
                            <div className="low-heading">
                                <h5>Amazon</h5>
                                <h5>Action</h5>
                                <h5>2021</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* ==============3=============== */}
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <Link to="/movies/157336">
                    <div className="third-col col">
                        <h2>Interstellar</h2>
                        <div className="low-heading">
                            <h5>Netflix</h5>
                            <h5>Action</h5>
                            <h5>2021</h5>
                        </div>
                    </div>
                    </Link>
                </div>
                {/* ==============4=============== */}
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <Link to="/movies/12">
                    <div className="fourth-col col">
                        <h2>Animation</h2>
                        <div className="low-heading">
                            <h5>Free</h5>
                            <h5>Action</h5>
                            <h5>2021</h5>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
