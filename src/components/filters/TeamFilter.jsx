import { useState, useMemo } from "react";
import { useGetTeamsQuery } from "../../state/api";
import Options from "./options";

const TeamFilter = ({ searchValue = 'All' }) => {
    const limit = useMemo(() => 6, []);
    const [currentPage, setCurrentPage] = useState(0);
    const [search, setSearch] = useState('');

    const { data, isFetching, error } = useGetTeamsQuery({ limit, page: currentPage, search });
    const { teams, totalPages } = useMemo(() => data || { teams: [], totalPages: 0 }, [data]);
    
    return (
        <Options
            searchValue={searchValue}
            options={teams}
            link={'/cards/team'}
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
}

export default TeamFilter
