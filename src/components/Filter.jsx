import { useLocation, useNavigate, useParams } from "react-router-dom"
import { showFilter } from "../assets/functions/site"

const Filter = () => {
    const { op, type, val } = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <article className="filter full-border">
            <h3>Filter By</h3>
            {
                showFilter(type, op, navigate, location)
            }
        </article>
    )
}

export default Filter
