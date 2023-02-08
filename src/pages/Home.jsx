import '../styles/content/content.css'
import { About, Sidebar, Card } from '../components'

const Home = ({ cards }) => {
    const alph = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const cat = ['Cards by Player', 'Cards by Team', 'Cards by Sport', 'Card by Rating', 'Recent Cards']

    return (
        <div className="home-content">
            <Sidebar cat={cat} />
            <article className="main-content">
                <h2 className="title full-border">Browse Sports Cards (By Player First Letter of First Name)</h2>
                <ul className="alph-cat flex-row align-items-center justify-content-center">
                    {
                        alph.map( (letter, i) => <li className="full-border" key={i}>{letter}</li> )
                    }
                </ul>

                <h2 className="title full-border">Newest Sport Card Releases</h2>
                <ul className="cards">
                    {
                        cards?.map(
                            (card, i) => <li key={i} ><Card card={card} /></li>
                        )
                    }
                </ul>

                <About />
            </article>
        </div>
    )
}

export default Home
