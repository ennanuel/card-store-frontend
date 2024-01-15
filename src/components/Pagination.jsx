import React, { useMemo } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { createPagination } from '../utils/site';

const Pagination = ({ totalPages, to }) => {
    const pages = useMemo(() => createPagination(totalPages), [totalPages]);
    const { page } = useParams();
    const invalidPage = useMemo(() => /nan/i.test(Number(page)), [page]);
    
    return (
        <ul className="pagination flex-row">
            {
                pages.map((page, i) => (
                    <li key={i}>
                        <NavLink
                            to={`${to}/${i}`}
                            className={({ isActive }) => `page flex-row full-border ${((invalidPage && i === 0) || isActive) && 'current-page'}`}
                        >
                            {page}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    )
};

export default Pagination
