import { useMemo } from 'react';
import icon from '../../assets/icons/broken_card.svg';

const Error = ({ text = '' }) => {
  const messages = useMemo(() => text.split(','), [text])
  return (
    <div className="error full-w flex-col ai-center jc-center">
      <img src={icon} alt="Error Image" className="error_img" />
      { messages.map((message, i) => <p key={i} className="error_text">{ message }</p>) }
    </div>
  )
}

export default Error
