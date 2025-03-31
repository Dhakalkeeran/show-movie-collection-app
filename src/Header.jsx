import { useNavigate } from "react-router-dom"

function Header() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/add-movie")
    }

    return (
        <div id="home-headers">
            <h1 id="header-title"> Your Favorite Movies </h1>
            <button id="add-movie-button" onClick={handleClick}>Add Movie</button>
        </div>
    )
}

export default Header
