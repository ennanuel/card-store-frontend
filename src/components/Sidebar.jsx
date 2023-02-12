import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { navList } from '../assets/data'

const Sidebar = () => {
  return (
    <article className="sidebar">
        <div className="cat full-border">
            <h2 className="title">Category</h2>
            <ul className="categories">
                {
                    navList.slice(1, ).map( (category, i) => 
                    <li key={i}>
                        <p className="flex-row align-items-center link">
                            <Link to={category.link}><span className="flex-row align-items-center justify-content-center">
                                <MdOutlineKeyboardArrowRight />Cards {category.name}</span>
                            </Link>
                        </p>
                    </li> )
                }
                <li className="flex-row align-items-center link">
                    <span className="flex-row align-items-center justify-content-center"><MdOutlineKeyboardArrowRight />
                    <Link to="/cards/">Recent Cards</Link></span>
                </li>
            </ul>
        </div>
    </article>
  )
}

export default Sidebar
