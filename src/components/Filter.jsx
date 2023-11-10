import { useLocation, useParams } from "react-router-dom"
import { FILTER_TEXT_OBJ } from "../utils/site";
import { useMemo } from "react";
import { NameFilter, PriceFilter, RatingFilter, SportFilter, TeamFilter } from "./filters";

const FILTER_TYPES = {
  team: TeamFilter,
  sport: SportFilter,
  price: PriceFilter,
  rating: RatingFilter,
  name: NameFilter
}

const Filter = () => {
    const { fetchType, searchValue } = useParams();
    const { pathname } = useLocation();
    const filterText = useMemo(() => FILTER_TEXT_OBJ[fetchType] || FILTER_TEXT_OBJ['name'], [fetchType]);
    const FilterType = useMemo(() => FILTER_TYPES[fetchType] || FILTER_TYPES['name'], [fetchType]);

    return (
        <article className="filter full-border">
            <h3 className="dark_title">
                {filterText} Filter
            </h3>
            <FilterType searchValue={searchValue} fetchType={fetchType} url={pathname} />
        </article>
    )
}

export default Filter
