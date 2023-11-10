import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { NAV_LIST } from '../assets/data'

const Sidebar = () => {
  return (
    <article className="sidebar">
        <div className="cat full-border">
            <h2 className="title">Category</h2>
            <ul className="categories">
                {
                    NAV_LIST.slice(1, ).map( (category, i) => 
                    <li key={i}>
                        <p className="flex-row ai-center link">
                            <Link to={category.link}><span className="flex-row ai-center jc-center">
                                <MdOutlineKeyboardArrowRight />Cards {category.name}</span>
                            </Link>
                        </p>
                    </li> )
                }
            </ul>
        </div>
    </article>
  )
}

export default Sidebar
