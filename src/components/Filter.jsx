import { useLocation, useNavigate, useParams } from "react-router-dom"
import { showFilter } from "../assets/functions/site"
import { getFilterText } from "../assets/functions/site"

const Filter = () => {
    const { op, type, val } = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <article className="filter full-border">
            {
                getFilterText(type) &&
                <h3 className="dark_title">
                    {getFilterText(type)} Filter
                </h3>
            }
            {
                showFilter(type, op, val, navigate, location)
            }
        </article>
    )
}

export default Filter
