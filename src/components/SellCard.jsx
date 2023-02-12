import { useState, useEffect } from 'react'
import { MdCancel } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import '../styles/sellcard/sellcard.css'

const SellCard = ({show, setShow}) => {
    const { id } = useParams()
    const [inputVal, setInputVal] = useState('')

    const handleChange = (e) => {
        setInputVal(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        setInputVal('')
    }, [id])

    return (
        <section className={`sell-card full-hw flex-row align-items-center justify-content-center ${show && 'show-sell'}`}>
            <form onSubmit={handleSubmit} className="flex-col full-w relative">
                <label htmlFor="wallet_id">
                    {inputVal !== '' ? <span className="bad"><b>{'Incorrect PIN!'}</b></span> : "Input your Referal ID."}
                </label>
                <input 
                    type="text" 
                    id="wallet_id" 
                    className={`full-w full-border ${inputVal && 'bad_input'}`} 
                    onChange={handleChange} 
                    placeholder="Referal ID"
                    value={inputVal} 
                />
                <div className="buttons flex-row justify-content-center align-items-center">
                    <button className="full-w submit-id sell-btn action-btn relative">SUBMIT</button>
                    <button type="button" className="cancel absolute flex-row align-items-center justify-content-center" onClick={() => {setShow(false)}}><MdCancel /></button>
                </div>
            </form>
        </section>
    )
}

export default SellCard
