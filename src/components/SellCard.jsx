import { MdCancel } from 'react-icons/md'
import '../styles/sellcard/sellcard.css'

const SellCard = ({show, setShow}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section className={`sell-card full-hw flex-row align-items-center justify-content-center ${show && 'show-sell'}`}>
            <form onSubmit={handleSubmit} className="flex-col full-w relative">
                <label htmlFor="wallet_id">Input your Referal ID.</label>
                <input type="text" id="wallet_id" className="full-w full-border" placeholder="Referal ID" />
                <div className="buttons flex-row justify-content-center align-items-center">
                    <button className="full-w submit-id sell-btn action-btn relative" onClick={() => {setShow(false)}}>SUBMIT</button>
                    <button className="cancel absolute flex-row align-items-center justify-content-center" onClick={() => {setShow(false)}}><MdCancel /></button>
                </div>
            </form>
        </section>
    )
}

export default SellCard
