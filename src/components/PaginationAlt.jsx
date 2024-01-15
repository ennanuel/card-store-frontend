import { useMemo } from 'react';
import { createPagination } from '../utils/site';

const PaginationAlt = ({ totalPages, currentPage, setCurrentPage }) => {
    const pages = useMemo(() => createPagination(totalPages), [totalPages]);

    return (
        <ul className="pagination-alt flex-row jc-center">
            {
                pages.map((page, i) => (
                    <li key={i}>
                        <button
                            onClick={() => setCurrentPage(page - 1)}
                            className={`page flex-row jc-center ai-center full-border ${(currentPage === page - 1) && 'current-page'}`}
                        >
                            {page}
                        </button>
                    </li>
                ))
            }
        </ul>
    )
};

export default PaginationAlt
