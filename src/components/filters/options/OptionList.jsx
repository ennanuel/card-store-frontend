import { Loading, Error, NothingFound } from '../../fetch_states';
import Option from './Option';

const OptionList = ({ loading, error, options, currentOption, link, close, isTeamFilter }) => {
    if (loading) return <Loading text="Loading options..." />;
    else if (error) return <Error text="Could not load options" />;
    else if (options.length < 1) return <NothingFound text="Nothing was found" />;
    else return (
        <ul className="options-list">
            {
                options.map((option, i) => (
                    <Option
                        key={i}
                        {...option}
                        close={close}
                        link={link}
                        currentOption={currentOption}
                        isTeamOption={isTeamFilter}
                    />
                ))
            }
        </ul>
    )
};

export default OptionList
