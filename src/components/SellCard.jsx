import { useState, useEffect } from 'react'
import { MdCancel } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/sellcard/sellcard.css'
import { checkPIN } from '../assets/functions/card'

const SellCard = ({show, setShow, setIsPending, isPending}) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [checking, setChecking] = useState(false)
    const [inputVal, setInputVal] = useState('')
    const [rightPin, setRightPin] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setInputVal(e.target.value)
        setSubmitted(false)
        setRightPin(false)
        console.log(setRightPin)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!inputVal) return;
        setSubmitted(true)
        setChecking(true)
        checkPIN(inputVal, setRightPin, setChecking, setIsPending, navigate)
    }

    const close = () => {
        setShow(false)
        setRightPin(false)
        setInputVal('')
        setSubmitted(false)
    }

    useEffect(() => {
        setInputVal('')
    }, [id])

    return (
        <section className={`sell-card full-hw flex-row align-items-center justify-content-center ${show && 'show-sell'}`}>
            {
            !isPending ?
            <form onSubmit={handleSubmit} className="flex-col full-w relative">
                <label htmlFor="wallet_id">
                {!checking && submitted && !rightPin ? <span className="bad"><b>Incorrect PIN!</b></span> : "Input your Referal ID."}
                </label>
                <input 
                    type="text" 
                    id="wallet_id" 
                    className={`full-w full-border ${!checking && submitted && !rightPin ? 'bad_input' : ''}`} 
                    onChange={handleChange} 
                    placeholder="Referal ID"
                    value={inputVal} 
                />
                <div className="buttons flex-row justify-content-center align-items-center">
                    <button disabled={checking} type="submit" className="full-w submit-id sell-btn action-btn relative">{checking ? 'CHECKING PIN...' : 'SUBMIT'}</button>
                    <button type="button" className="cancel absolute flex-row align-items-center justify-content-center" onClick={close}><MdCancel /></button>
                </div>
            </form>
            :    
            <div className="pending_msg">
                <p>Working hours from <b>12:00PM</b> to <b>09:00PM</b></p>
                <button type="button" className="cancel absolute flex-row align-items-center justify-content-center" onClick={close}><MdCancel /></button>
            </div>
            }
        </section>
    )
}

export default SellCard
