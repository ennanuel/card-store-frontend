import '../styles/content/content.css'
import { About, Sidebar, AlphabetList, CardsList, Meter } from '../components'

const Home = ({ cards, error, empty }) => {

    return (
        <div className="home-content">
            <Sidebar />
            <article className="main-content"><div className="intro">
                <h2 className="title full-border">
                    Welcome to Card Store
                </h2>
                <Meter />
                <p className='welcome_text'> 
                    We have amazing offers for you to sell and earn big from the card store giveaway season. <br />
                    Here's a list of players available at amazing rates.
                </p>
            </div>
                <h2 className="title full-border">Browse Sports Cards (By Player First Letter of First Name)</h2>
                <AlphabetList />

                <h2 className="title full-border">Newest Sport Card Releases</h2>
                <CardsList cards={cards.sort( (a, b) => /soccer/i.test(b.sport) ? 1 : -1 ).slice(0, 6)} error={error} empty={empty} />

                <About />
            </article>
        </div>
    )
}

export default Home
