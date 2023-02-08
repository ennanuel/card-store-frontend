import image from '../assets/card-images/empty.jpg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { addCard } from '../assets/auth/addcard'
import '../styles/addcard/addcard.css'

const AddCard = () => {
    const [playerData, setPlayerData] = useState({})
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
        addCard(playerData, navigate);
    }

    return (
        <section className="add_card">
            <h2 className="title full-border">Create Player Card</h2>
            <form className="add-card relative full-w flex-row" onSubmit={handleSubmit}>
                <div className="input-img full-border">
                     <label htmlFor="image">
                        <img id="image_view" src={img || image} alt="" />
                    </label>
                    <input type="file"name="image" id="image" onChange={handleChange} />
                </div>
                <div className="player-info full-w flex-col">
                    <div className="names full-w flex-row">
                        <div className="name full-w">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" id="first_name" name="first_name" onChange={handleChange} />
                        </div>
                        <div className="name">
                            <label htmlFor="middle_name">Middle Name</label>
                            <input type="text" id="middle_name" name="middle_name" onChange={handleChange} />
                        </div>
                        <div className="name">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" id="last_name" name="last_name" onChange={handleChange} />
                        </div>
                    </div>
                    <label htmlFor="desc">Player Description</label>
                    <textarea name="desc" id="desc" onChange={handleChange}></textarea>
                    <label htmlFor="team">Player Team</label>
                    <input type="text" id="team" name="team" onChange={handleChange} />
                    <label htmlFor="rating">Player Ranking</label>
                    <input type="text" id="rating" name="rating" onChange={handleChange} />
                    <label htmlFor="sport">Sport</label>
                    <input type="text" id="sport" name="sport" onChange={handleChange} />
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" name="price" onChange={handleChange} />

                    <button className="sell-btn action-btn relative" type="submit">CREATE CARD</button>
                </div>
            </form>
        </section>
        
    )
}

export default AddCard
