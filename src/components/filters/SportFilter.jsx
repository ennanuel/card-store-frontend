import { useState, useMemo, useRef } from 'react';
import { useGetSportsQuery } from '../../state/api';
import Options from './options';

const SportFilter = ({ searchValue = 'All' }) => {
    const limit = useMemo(() => 6, []);
    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState('');

    const { data, isFetching, error } = useGetSportsQuery({ limit, page: currentPage, search });
    const { sports, totalPages } = useMemo(() => data || { sports: [], totalPages: 0 }, [data]);
    
    return (
        <Options
            searchValue={searchValue}
            options={sports}
            link={'/cards/sport'}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            loading={isFetching}
            error={error}
            search={search}
            isTeamFilter={true}
            setSearch={setSearch}
        />
    )
};

export default SportFilter
