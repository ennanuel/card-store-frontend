import '../styles/content/content.css'
import { About, Sidebar, Card, AlphabetList, Loader, Error, NoResult, CardsList } from '../components'

const Home = ({ cards, error, empty }) => {
    const cat = ['Cards by Player', 'Cards by Team', 'Cards by Sport', 'Card by Rating', 'Recent Cards']

    return (
        <div className="home-content">
            <Sidebar cat={cat} />
            <article className="main-content">
                <h2 className="title full-border">Browse Sports Cards (By Player First Letter of First Name)</h2>
                <AlphabetList />

                <h2 className="title full-border">Newest Sport Card Releases</h2>
                <CardsList cards={cards} error={error} empty={empty} />

                <About />
            </article>
        </div>
    )
}

export default Home
