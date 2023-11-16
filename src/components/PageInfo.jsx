import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";
import handlePath from "../utils/pathhandler";
import { HiChevronDoubleRight } from "react-icons/hi2";

const PageInfo = () => {
  const { pathname } = useLocation();
  const pageNavigation = useMemo(() => handlePath(pathname), [pathname]);

  return (
    <div className="page-info full-w full-border flex-row ai-center">
      <ul className="flex-row ai-center">
        {
          pageNavigation.map(({ link, title }, i, arr) => (
            <>
              <Link key={i} to={link} className="flex-row ai-center jc-center">
                <span>{title}</span>
              </Link>
              {i !== (arr.length - 1) && <HiChevronDoubleRight />}
            </>
          ))
        }
      </ul>
      <p className="cards-sold">OVER 1,000 SOLD!</p>
    </div>
  )
}

export default PageInfo
