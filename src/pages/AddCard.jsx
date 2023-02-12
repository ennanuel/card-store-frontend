import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Error, AddCardForm } from '../components'
import { addCard } from '../assets/functions/card'
import '../styles/addcard/addcard.css'

const AddCard = () => {
    const [playerData, setPlayerData] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [img, setImg] = useState()

    const navigate = useNavigate()

    const handleChange = (e) => {
        if(e.target.getAttribute('name') === 'image') {
            const file = e.target.files[0];
            const reader = new FileReader()

            reader.readAsDataURL(file)
            reader.onload = () => {
                setImg(reader.result);
            }
            setPlayerData(prev => ({...prev, image: file}))
        } 
        else {
           setPlayerData(prev => ({...prev, [e.target.getAttribute('name')]: e.target.value})); 
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addCard(playerData, navigate, setError, setLoading);
    }

    return (
        <section className="add_card">
            <h2 className="title full-border">Create Player Card</h2>
                {
                    error ?
                    <div className="error full-w flex-col justify-content-center align-items-center">
                        <Error text="Could not add card!" />
                        <button className="error_btn" onClick={() => {setError(false)}}>Retry</button>
                    </div> :
                    <AddCardForm handleSubmit={handleSubmit} img={img} handleChange={handleChange} loading={loading} />
                }
        </section>
        
    )
}

export default AddCard
