import { Card } from '../components'
import { CardInfo, PageInfo } from '../components'

const ViewCard = ({ cards }) => {
    
    return (
        <article className="view-card">
            <PageInfo />
            <CardInfo />
            <div className="related-cards">
                <h2 className="title full-border">Related Players</h2>
                <ul className="cards">   
                    {
                        cards?.map( ( card, i) => <li key={i}><Card card={card} /></li> )
                    }
                </ul>
            </div>
        </article>
    )
}

export default ViewCard
