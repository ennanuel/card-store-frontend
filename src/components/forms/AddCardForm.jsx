import { Error, Loading } from "../fetch_states";


const AddCardForm = ({ imgSrc, first, middle, last, desc, team, rating, sport, price, quantity, handleSubmit, handleChange, handleFileChange, loading, error, errorMsg, reset }) => {
  return (
    <form className="add-card relative full-w flex-row" onSubmit={handleSubmit}>
      {
        (loading || error) &&
        <div className="form_loading absolute flex-row full-w full-h ai-center jc-center">
            {
              loading ?
                <Loading text="Adding card..." /> :
                error && 
                  <div className="error full-w flex-col jc-center ai-center">
                    <Error text={errorMsg} />
                    <button className="error_btn" onClick={reset}>Retry</button>
                  </div>
            }
        </div>
      }
      <div className="input-img full-border">
        <label htmlFor="image">
          <img id="image_view" src={imgSrc} alt="" />
        </label>
        <input type="file" name="image" id="image" accept="image/jpg,image/png,image/jpeg" onChange={handleFileChange} />
      </div>
      <div className="player-info full-w flex-col">
        <div className="names full-w flex-row">
          <div className="name full-w">
            <label htmlFor="first">First Name</label>
            <input type="text" id="first" name="first" value={first} onChange={handleChange} />
          </div>
          <div className="name">
            <label htmlFor="middle">Middle Name</label>
            <input type="text" id="middle" name="middle" value={middle} onChange={handleChange} />
          </div>
          <div className="name">
            <label htmlFor="last">Last Name</label>
            <input type="text" id="last" name="last" value={last} onChange={handleChange} />
          </div>
        </div>
        <label htmlFor="desc">Player Description</label>
        <textarea name="desc" id="desc" value={desc} onChange={handleChange}></textarea>
        <label htmlFor="team">Player Team</label>
        <input type="text" id="team" name="team" value={team} onChange={handleChange} />
        <label htmlFor="rating">Player Rating</label>
        <input type="number" id="rating" name="rating" min={0} max={100} value={rating} onChange={handleChange} />
        <label htmlFor="sport">Sport</label>
        <input type="text" id="sport" name="sport" value={sport} onChange={handleChange} />
        <div className="price-quantity">
          <div>
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price" value={price} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="quantity">Card Quantity</label>
            <input type="number" id="quantity" name="quantity" value={quantity} onChange={handleChange} />
          </div>
        </div>

        <button className="sell-btn action-btn relative" type="submit">CREATE CARD</button>
      </div>
    </form>
  )
}

export default AddCardForm
