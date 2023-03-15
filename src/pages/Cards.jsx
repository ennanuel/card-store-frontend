import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCards } from '../assets/functions/card'
import { getText } from '../assets/functions/site'
import { AlphabetList, PageInfo, Filter, CardsList } from '../components'
import '../styles/cards/cards.css'

const Cards = ({ premium, page }) => {
    const { type, val, op } = useParams()
    const [cards, setCards] = useState([])
    const [error, setError] = useState(false)
    const [empty, setEmpty] = useState(false)

    useEffect(() => {
        setCards([])

        fetchCards(setCards, setError, setEmpty, type, val, op)
    }, [type, val, op])
    
    return (
        <section className="cards_page">
            <PageInfo page={page} />
            <h2 className="title full-w full-border">Cards - {getText(type)}</h2>
            <Filter />
            <CardsList premium={premium} cards={cards} error={error} empty={empty} />
        </section>
    )
}

export default Cards
