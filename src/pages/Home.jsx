import { About, Sidebar, AlphabetList, CardsList, Pagination } from '../components';
import { useGetAllCardsQuery } from '../state/api';
import { useParams } from 'react-router-dom';
import '../styles/content.scss';
import { useMemo } from 'react';

const Home = () => {
    const { '*': page } = useParams();
    const { data = {}, isFetching, error } = useGetAllCardsQuery({ page, limit: 10 });
    const { cards = [], totalPages = 0 } = useMemo(() => data, [data]);

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
                <CardsList cards={cards} loading={isFetching} error={error} />
                <Pagination to="" totalPages={totalPages} />
                <About />
            </article>
        </div>
    )
};

export default Home
