import { footerNavigate } from '../assets/data'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import '../styles/footer/footer.css'

const Footer = () => {
  return (
    <footer className="footer full-w">
        <div className="navigate flex-row">
            {
                footerNavigate.map(
                    (navItem, i) => (
                        <ul key={i}>
                            <h3>{navItem.title}</h3>
                            {navItem.links.map(
                                (item, i) => <li key={i} className="flex-row align-items-center"><MdOutlineKeyboardArrowRight /><span className="link">{item}</span></li>
                            )}
                        </ul>
                    )
                )
            }
        </div>
        <div className="copyright">
            <p>2001-2023 Nexmark, Inc.</p>
            <p><a href="http://cardStore.netlify.app" className="link">cardStore.netlify.app</a> features a wide selection of football trading cards,</p>
            <p>including rookie cards, team sets and graded cards.</p>
        </div>
    </footer>
  )
}

export default Footer
