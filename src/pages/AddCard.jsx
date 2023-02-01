import '../styles/addcard/addcard.css'

const AddCard = () => {
    return (
        <section className="add_card">
            <h2 className="title full-border">Create Player Card</h2>
            <form className="add-card full-w flex-row align-items-center">
                <div className="player-info full-w flex-col align-items-center">
                    <label htmlFor="player_name">Player Name</label>
                    <input type="text" id="player_name" name="player_name" />
                    <label htmlFor="player_desc">Player Description</label>
                    <textarea name="player_desc" id="player_desc"></textarea>
                    <label htmlFor="player_team">Player Team</label>
                    <input type="text" id="player_team" name="player_team" />
                    <label htmlFor="player_rank">Player Ranking</label>
                    <input type="text" id="player_rank" name="player_rank" />
                    <label htmlFor="player_sport">Sport</label>
                    <input type="text" id="player_sport" name="player_sport" />
                    <label htmlFor="player_price">Price</label>
                    <input type="number" id="player_price" name="player_price" />
                    <button className="sell-btn action-btn relative" type="submit">CREATE CARD</button>
                </div>

                <div className="input-img full-w">
                    <label htmlFor="player-img">
                        add image
                        <img src="" alt="" />
                    </label>
                    <input type="file" name="player-img" id="player-img" />
                </div>
            </form>
        </section>
        
    )
}

export default AddCard
