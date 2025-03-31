import { useNavigate } from "react-router-dom"

function Card({ data }) {
    const navigate = useNavigate();

    function handleClick(){
        navigate("/card-details", {
            state: {
                data: data
            }
        });
    }

    return (
        <div className="card" onClick={handleClick} style={{ cursor: "pointer" }}>
            <img 
                src={data.poster}
                alt="Movie Poster" 
                width="230"
            />
            <h2>{ data.title }</h2>
            <p>{ data.year }</p>
            <p>Actors: { data.actors }</p>
            <p>Director: { data.director }</p>
        </div>
    )
}

export default Card
