import Loader from "../fetch_components/Loader"
import image from '../../assets/card-images/empty.jpg'


const AddCardForm = ({ img, handleSubmit, handleChange, loading }) => {
  return (
    <form className="add-card relative full-w flex-row" onSubmit={handleSubmit}>
      {
        loading && 
        <div className="form_loading absolute flex-row full-w full-h align-items-center justify-content-center"><Loader text="Adding card..." /></div>
      }
      <div className="input-img full-border">
        <label htmlFor="image">
          <img id="image_view" src={img || image} alt="" />
          </label>
          <input type="file"name="image" id="image" accept="image/jpg,image/png,image/jpeg" onChange={handleChange} />
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
          <input type="text" id="rating" name="rating" min={0} max={100} onChange={handleChange} />
          <label htmlFor="sport">Sport</label>
          <input type="text" id="sport" name="sport" onChange={handleChange} />
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" onChange={handleChange} />

          <button className="sell-btn action-btn relative" type="submit">CREATE CARD</button>
      </div>
    </form>
  )
}

export default AddCardForm
