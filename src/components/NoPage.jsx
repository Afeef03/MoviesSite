import React from 'react'

const NoPage = () => {
    return (
        <div className='container mt-10'>
            <div className="alert alert-primary" role="alert">
                <h2 className="alert-heading fw-bold">No result Found!</h2>
                <p>No results found. Please try a different search query or refine your search to find the movies you're looking for.</p>
                <hr />
                <p className="mb-0">You can also explore our featured movies Or Shows below.</p>
            </div>
        </div>
    )
}

export default NoPage
