import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AddCardForm } from '../components/forms'
import { addCard } from '../utils/card';
import { getImageSrc } from '../utils';
import '../styles/addcard.scss';
import emptyImage from '../assets/card-images/empty.jpg';
import { useSelector } from 'react-redux';

const INITIAL_VALUES = { first: '', middle: '', last: '', desc: '', team: '', rating: 0, sport: '', price: 0, quantity: 0, image: undefined };

const AddCard = () => {
    const user = useSelector(state => state.user);
    const [cardValues, setCardValues] = useState(INITIAL_VALUES);
    const [{ loading, error, errorMsg }, setFetchState] = useState({ loading: false, error: false });
    const [imgSrc, setImgSrc] = useState(emptyImage);
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (!e.target) return;
        const { name, value } = e.target;
        setCardValues(prev => ({ ...prev, [name]: value }));
    };
    const handleFileChange = async (e) => {
        try {
            if (!e.target.files) return;
            const file = e.target.files[0];
            const imgSrc = await getImageSrc(file);
            setCardValues(prev => ({ ...prev, image: file }));
            setImgSrc(imgSrc);
        } catch (error) {
            console.error(error);
        }
    };
    const handleSubmit = (e) => {
        setFetchState({ loading: true, error: false, errorMsg: '' });
        e.preventDefault();
        addCard(cardValues, user._id)
            .then(handleSuccess)
            .catch(handleError);
    };

    function handleSuccess() { navigate('/') };
    function handleError(error) {
        console.error(error);
        setFetchState({ loading: false, error: true, errorMsg: String(error) });
    };
    function reset() { setFetchState({ loading: false, error: false, }) };

    return (
        <section className="add_card">
            <h2 className="title full-border">Create Player Card</h2>
            <AddCardForm
                {...cardValues}
                imgSrc={imgSrc}
                error={error}
                errorMsg={errorMsg}
                loading={loading}
                reset={reset}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                handleFileChange={handleFileChange}
            />
        </section>
        
    )
}

export default AddCard
