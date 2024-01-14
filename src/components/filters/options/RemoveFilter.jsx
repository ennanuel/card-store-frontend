import React from 'react';
import Option from './Option';

const RemoveFilter = ({ showRemoveFilter, close, link, currentOption }) => {
    if (!showRemoveFilter) return;
    return (
        <ul className="options-list">
            <Option
                name="All"
                close={close}
                link={link}
                currentOption={currentOption}
            />
        </ul>
    )
};

export default RemoveFilter
