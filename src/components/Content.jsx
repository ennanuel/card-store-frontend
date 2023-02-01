import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import '../styles/content/content.css'
import Card from './Card'

const Content = () => {
    const alph = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const cat = ['Football Card Singles', 'Football Cards By Set', 'Football Team Sets (50% Off)', 'Football Card Gallery', 'Football Player Lots', 'Cards By Team', 'Cards By College', 'Other Sports', 'Graded Cards']

    return (
        <div className="home-content">
            <article className="sidebar">
                <div className="cat full-border">
                    <h2 className="title">Football Cards</h2>
                    <ul className="categories">
                        {
                            cat.map( (category, i) => 
                            <li key={i}>
                                <p className="flex-row align-items-center link"><span className="flex-row align-items-center justify-content-center"><MdOutlineKeyboardArrowRight /></span>{category}</p>
                            </li> )
                        }
                    </ul>
                </div>
                
            </article>
            <article className="main-content">
                <h2 className="title full-border">Browse Football Cards - Singles by Player (By First Letter of Last Name)</h2>
                <ul className="alph-cat flex-row align-items-center justify-content-center">
                    {
                        alph.map( (letter, i) => <li className="full-border" key={i}>{letter}</li> )
                    }
                </ul>

                <h2 className="title full-border">Newest Football Card Releases</h2>
                <ul className="cards">
                    {
                        'abcdefghij'.split('').map(
                            (card, i) => <li key={i} ><Card/></li>
                        )
                    }
                </ul>

                <div className="intro">
                    <h2 className="title full-border">
                        Welcome to Card Store
                    </h2>
                    <p>
                    At Card Store we specialize in Football Cards (singles), Rookie Cards and Football team sets. We pride ourselves in maintaining the most organized modern era football card inventory on the web. You can easily find the football cards you are looking for with our customer friendly and easily searchable website. Not only is it easy to find the cards you need, but you will find them at great prices. Most stars and rookies are listed at 25%-50% off the listed book price.
                    </p>
                    <p>
                    SET BUILDER DISCOUNTS<br />
                    We offer discounts for those who are set builders and are trying to complete their football card sets. These discounts apply to unique cards from the same set:
                    </p>
                    <p>
                    20-49 cards - 15%<br />
                    50+ cards - 25%
                    </p>
                    <p>
                        This discount is automatically added to your order and will be displayed in your shopping cart. Free shipping on orders over $50 also applies.
                    </p>
                    <p>
                        We have made it easy for all types of collectors to find the cards they are searching for. We only list cards that are available, so if you see it listed, it is available for purchase. Set collectors can browse commons and stars of every new issue within days of it's release. Player collectors can easily see which cards we have in stock. College team collectors can easily see see a list of players from that university and the cards that are available for each player. Team collectors can see a list of players associated with that team. Cards are available from all card manufacturers including Topps, Panini, Upper Deck, Donruss, Playoff, Fleer, SA-GE and Press Pass.
                    </p>
                </div>
            </article>
        </div>
    )
}

export default Content
