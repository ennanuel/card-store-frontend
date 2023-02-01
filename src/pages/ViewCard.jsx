import { Card } from '../components'
import { CardInfo, PageInfo } from '../components'

const ViewCard = () => {
    const letters = 'abcdef'.split('')
    
    return (
        <article className="view-card">
            <PageInfo />
            <CardInfo />
            <div className="related-cards">
                <h2 className="title full-border">Related Players</h2>
                <ul className="cards">   
                    {
                        letters.map( ( letter, i) => <li key={i}><Card /></li> )
                    }
                </ul>
            </div>
        </article>
    )
}

export default ViewCard
