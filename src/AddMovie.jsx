import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import url from "./Url"

function AddMovie() {
    const [movieTitle, setMovieTitle] = useState('');
    const [responseText, setResponseText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    function addMovieToDB() {
        const fetchData = async () => {
            setLoading(true);
            try {
                const updatedMovieTitle = movieTitle.trim().replace(" ", "+");
                const response = await fetch(url + "add/?title=" + updatedMovieTitle);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const text = await response.text();
                setResponseText(text);
                setLoading(false);
            } catch (e) {
                setError(e);
                setLoading(false);
            }
        };

        fetchData();

        if (loading) {
            return <p>Loading...</p>;
        }
    
        if (error) {
            return <p>Error: {error.message}</p>;
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addMovieToDB();
            setMovieTitle('');
        }
    };

    function handleAdd() {
        addMovieToDB();
        setMovieTitle('');
    }

    return (
        <div id="add-movie-div" className="overlay">
            <button id="back-button-add-movie" onClick={() => navigate(-1)}>Go Back</button>
            <h1>Add Movie</h1>
            <p>{loading ? 'Loading...' : error ? `Error: ${error}` : responseText}</p>
            <input 
                id="write-title"
                placeholder="Write movie title to add to the favorite list"
                value={movieTitle}
                onChange={(e) => setMovieTitle(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <br></br>
            <button id="add-button" onClick={handleAdd}>Add</button>
        </div>
    );
}

export default AddMovie;