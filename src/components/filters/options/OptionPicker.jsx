import { useMemo, useState } from 'react';
import PaginationAlt from '../../PaginationAlt';
import Search from './Search';
import RemoveFilter from './RemoveFilter';
import OptionList from './OptionList';
import '../../../styles/optionpicker.scss';

const OptionPicker = ({ options = [], close, loading, error, link, optionText, currentPage, totalPages, setCurrentPage, currentOption, search, setSearch, isTeamFilter }) => {
    const showRemoveFilter = useMemo(() => currentOption && !/^all$/i.test(currentOption), [currentOption]);
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!setSearch) return;
        setSearch(searchValue);
    };
    const handleChange = (e) => setSearchValue(e.target.value);
    const clearSearch = () => setSearchValue('');

    return (
        <div className="option-items flex-col">
            <Search
                search={search}
                optionText={optionText}
                searchValue={searchValue}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                clearSearch={clearSearch}
            />
            <RemoveFilter
                showRemoveFilter={showRemoveFilter}
                close={close}
                link={link}
                currentOption={currentOption}
            />
            <OptionList
                loading={loading}
                error={error}
                options={options}
                currentOption={currentOption}
                link={link}
                close={close}
                isTeamFilter={isTeamFilter}
            />
            <PaginationAlt
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
};

export default OptionPicker
