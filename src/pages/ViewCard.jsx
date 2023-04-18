import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCards } from '../assets/functions/card'
import { CardsList } from '../components'
import { CardInfo, PageInfo } from '../components'

const ViewCard = ({ premium, cards, page, isPending, setIsPending }) => {
    const { id, ...others } = useParams()
    const card = cards.filter( elem => elem._id === id )
    const [newCards, setCards] = useState([]);
    const [error, setError] = useState(false)
    const [empty, setEmpty] = useState(false)
    
    useEffect( () => {
        fetchCards(setCards, setError, setEmpty, 'sport', card[0]?.sport)
    }, [id])
    
    return (
        <article className="view-card">
            <PageInfo page={page} />
            <CardInfo isPending={isPending} setIsPending={setIsPending} premium={premium} />
            <div className="related-cards">
                <h2 className="title full-border">Related Players</h2>
                <CardsList premium={premium} cards={newCards.slice(0, 6).filter( elem => elem._id !== id )} empty={empty} error={error} />
            </div>
        </article>
    )
}

export default ViewCard
