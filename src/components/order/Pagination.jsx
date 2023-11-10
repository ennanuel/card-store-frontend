import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { createPagination } from '../../utils/site';

const Pagination = ({ totalPages, pageFilter }) => {
    const pages = useMemo(() => createPagination(totalPages), [totalPages])
    if (pages.length <= 1) return;
    return (
        <ul className="pagination flex-row">
        {
            pages.map((page, i) => (
            <li key={i}>
                <NavLink
                to={`/orders/${pageFilter}/${i}`}
                className={({ isActive }) => `page flex-row full-border ${isActive && 'current-page'}`}
                >{page}</NavLink>
            </li>
            ))
        }
        </ul>
    )
};

export default Pagination
