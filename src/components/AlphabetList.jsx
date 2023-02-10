import { Link, useParams } from "react-router-dom"

const AlphabetList = () => {
    const alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const {type, val, op} = useParams();

    return (
        <ul className="alph-cat flex-row align-items-center justify-content-center">
            {
                alph.map( (letter, i) => <li className={`full-border ${ val === letter && 'active-alph'}`} key={i}><Link to={`/cards/name/${letter}/first`}>{letter}</Link></li> )
            }
        </ul>
    )
}

export default AlphabetList
