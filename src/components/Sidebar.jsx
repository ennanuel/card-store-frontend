import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Sidebar = ({ cat }) => {
  return (
    <article className="sidebar">
        <div className="cat full-border">
            <h2 className="title">Category</h2>
            <ul className="categories">
                {
                    cat.map( (category, i) => 
                    <li key={i}>
                        <p className="flex-row align-items-center link"><span className="flex-row align-items-center justify-content-center"><MdOutlineKeyboardArrowRight /></span>{category}</p>
                    </li> )
                }
            </ul>
        </div>
    </article>
  )
}

export default Sidebar
