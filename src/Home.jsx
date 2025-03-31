import { useState, useEffect } from 'react';
import Header from "./Header.jsx";
import StackedCards from "./StackedCards.jsx";
import url from "./Url.js";

function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (e) {
                setError(e);
                setLoading(false);
            }
        };

        fetchData();
    }, [location.key]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            <Header/>
            <StackedCards allData={data}/>
        </>
    )
}

export default Home