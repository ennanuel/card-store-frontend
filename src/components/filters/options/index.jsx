import { useMemo, useState } from 'react';
import { GrClose } from "react-icons/gr";
import { MdKeyboardArrowDown } from 'react-icons/md';
import OptionPicker from "./OptionPicker";

const SportTeamFilter = ({ searchValue, options, link, currentPage, setCurrentPage, totalPages, loading, error, search, isTeamFilter, setSearch }) => {
    const textDisplaying = useMemo(() => isTeamFilter ? 'Showing cards of players in ' : 'Showing ', isTeamFilter);

    const [showOptions, setShowOptions] = useState(false);

    const open = () => setShowOptions(true);
    const close = () => {
        setShowOptions(false);
        setCurrentPage(0);
    }

    return (
        <div className="filter-container flex-col">
            <article className="sport_filter flex-row ai-center">
                <label htmlFor="select_team">
                    <span>{textDisplaying}</span>
                    <b className="highlight">{searchValue}</b>
                </label>
            <button className={`current-option flex-row ai-center jc-center ${showOptions && 'is-open'}`} onClick={showOptions ? close : open}>
                <span className="text flex-row ai-center jc-center">{searchValue}</span>
                <span className="more-icon flex-row ai-center jc-center">
                    {showOptions ? <GrClose size={18} /> : <MdKeyboardArrowDown size={25} />}
                </span>
            </button>
            </article>
            {
                showOptions &&
                <OptionPicker
                    options={options}
                    close={close}
                    link={link}
                    optionText={"Teams"}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                    currentOption={searchValue}
                    loading={loading}
                    error={error}
                    search={search}
                    isTeamFilter={isTeamFilter}
                    setSearch={setSearch}
                />
            }
        </div>
    )
};

export default SportTeamFilter
