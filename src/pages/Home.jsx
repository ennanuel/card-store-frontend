import '../styles/content/content.css'
import { About, Sidebar, AlphabetList, CardsList, Meter } from '../components'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Home = ({ cards, error, empty }) => {
    const [clicked, setClicked] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = () => {
        navigate('/premium')
        setClicked(true)
    }

    return (
        <div className="home-content">
            <Sidebar />
            <article className="main-content"><div className="intro">
                {
                    location.pathname === '/premium' && clicked ?
                    <>
                    <h2 className="title full-border">
                        Premium Package
                    </h2>
                    <Meter />
                    </> :
                    <>
                    <h2 className="title full-border flex-row align-items-center">
                        <span>Welcome to Card Store</span>
                        <span className="prem_pkg_link" onClick={handleClick}>View premium page</span>
                    </h2>
                    <p className='welcome_text'> 
                        We have amazing offers for you to sell and earn big from the card store giveaway season. <br />
                        Here's a list of players available at amazing rates.
                    </p>
                    </>
                }
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
