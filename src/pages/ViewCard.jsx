import { useParams } from 'react-router-dom'
import { Card } from '../components'
import { CardInfo, PageInfo } from '../components'

const ViewCard = ({ cards, page }) => {
    const { id } = useParams()
    
    return (
        <article className="view-card">
            <PageInfo page={page} />
            <CardInfo />
            <div className="related-cards">
                <h2 className="title full-border">Related Players</h2>
                <ul className="cards">   
                    {
                        cards?.filter( card => card._id !== id ).map( ( card, i) => <li key={i}><Card card={card} /></li> )
                    }
                </ul>
            </div>
        </article>
    )
}

export default ViewCard
