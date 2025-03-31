import { useNavigate, useLocation } from "react-router-dom";
import url from "./Url";

function CardDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const { data } = location.state || {};

    if (!data) {
        return <p>No data available!</p>
    }

    function deleteMovieFromDB() {
        const fetchData = async () => {
            try {
                const response = await fetch(url + "delete/" + data.id, {method: 'DELETE'});
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const message = await response.text();

                navigate("/", {
                    state: {
                        message: message
                    }
                });
            } 
            catch (e) {
                console.log("Error: ", e);
            }
        };

        fetchData();
    }

    const allInfo = data.allInfo.replace(/^[{}]+|[{}]+$/g, "");

    return (
        <div className="overlay">
            <div id="card-details-headers">
                <button id="go-back" onClick={() => navigate(-1)}>Go Back</button>
                <h1>{data.title} ({data.year})</h1>
                <button id="delete" onClick={deleteMovieFromDB}>Delete</button>
            </div>

            <img 
                src={data.poster}
                alt="Movie Poster" 
                width="350"
            />

            <p><strong>Actors:</strong> {data.actors}</p>
            <p><strong>Director:</strong> {data.director}</p>
            <p><strong>Release Year:</strong> {data.year}</p>
            <p>{allInfo}</p>
        </div>
    );
}

export default CardDetails;