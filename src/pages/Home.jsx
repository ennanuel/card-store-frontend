import '../styles/content.scss'
import { About, Sidebar, AlphabetList, CardsList } from '../components'
import { useState, useEffect } from 'react';
import { fetchPlayers } from '../utils/card';

const Home = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    function handleFetch(res) { 
        setLoading(false);
        setCards(res.slice(0, 15));
    };
    function handleError(error) {
        setError(true);
        setLoading(false);
        console.error(error);
    };
    useEffect(() => {
        setLoading(true);
        fetchPlayers()
            .then(handleFetch)
            .catch(handleError);
    }, []);

    return (
        <div className="home-content">
            <Sidebar />
            <article className="main-content"><div className="intro">
                <h2 className="title full-border">Welcome to Card Store</h2>
                <p className='welcome_text'>
                    We have amazing offers for you to sell and earn big from the card store giveaway season. <br />
                    Here's a list of players available at amazing rates.
                </p>
            </div>
                <h2 className="title full-border">Browse Sports Cards (By Player First Letter of First Name)</h2>
                <AlphabetList />
                <h2 className="title full-border">Newest Sport Card Releases</h2>
                <CardsList loading={loading} error={error} cards={cards} />
                <About />
            </article>
        </div>
    )
};

export default Home
