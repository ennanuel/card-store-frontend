import { Link } from "react-router-dom";

const ALPHABETS_ARRAY = 'abcdefghijklmnopqrstuvwxyz'.split('');
const AlphabetList = ({ alphabet = '' }) => {
    return (
        <ul className="alph-cat flex-row ai-center jc-center">
            {
                ALPHABETS_ARRAY.map((letter, i) => (
                    <li className={`full-border ${alphabet === letter && 'active-alph'}`} key={i}>
                        <Link to={`/cards/first/${letter}`}>
                            {letter}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default AlphabetList
