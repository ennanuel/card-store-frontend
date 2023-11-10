import { Link, useLocation } from "react-router-dom";
import { getNavigation } from "../utils/site";
import { useMemo } from "react";

const PageInfo = () => {
  const { pathname } = useLocation();
  const pageNavigation = useMemo(() => getNavigation(pathname), [pathname]);

  return (
    <div className="page-info full-w full-border flex-row ai-center">
      <ul className="page flex items-center">
        {
          pageNavigation.map(({ link, name }, i) => (
            <Link key={i} to={link}>{name}</Link>
          ))
        }
      </ul>
      <div className="cards-sold">OVER 1,000 SOLD!</div>
    </div>
  )
}

export default PageInfo
