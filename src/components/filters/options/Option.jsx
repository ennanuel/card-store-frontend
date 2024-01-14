import { Link } from "react-router-dom"

const Option = ({ name, close, link, currentOption, sport, isTeamOption }) => {
    return (
        <li onClick={close}>
            <Link
                to={`${link}/${name}`}
                className={`option-item truncate-text full-w flex-col ai-start jc-center ${name === 'All' && 'remove-filter'} ${currentOption === name && 'active-option'}`}
            >
                {isTeamOption && <span className="team-sport">{sport}</span>}
                <span className="option-name">{name === 'All' ? 'Remove Filter' : name}</span>
            </Link>
        </li>
    )
};

export default Option
