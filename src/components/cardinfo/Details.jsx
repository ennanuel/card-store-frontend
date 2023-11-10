import React from 'react'
import { Link} from 'react-router-dom'
import { HiCheckBadge } from 'react-icons/hi2'

const Details = ({ first, middle, last, desc, rating, team, sport, premium, quantity }) => {
    return (
        <div className='details'>
            <h3 className="player-name flex-row ai-center">
                <span>{first} {middle} {last}</span>
                {
                    premium &&
                    <div className={`premium_box flex-row ai-center premium_text`}>
                        <span className="prem_icon flex-row jc-center ai-center"><HiCheckBadge /></span>
                        <span>PREMIUM CARD</span>
                    </div>
                }
            </h3>
            <p className="player-card-desc">
                <span className="desc-title"><b>Description</b></span>
                <br />
                <span>{desc}</span>
            </p>
            <table className="additional-det full-w">
                <colgroup>
                    <col style={{ width: '30%' }}></col>
                    <col style={{ width:'70%' }}></col>
                </colgroup>
                <tbody>
                    <tr className="det">
                        <th><b>Team</b></th>
                        <td><Link to={`/cards/team/${team}`}>{team}</Link></td>
                    </tr>
                    <tr className="det">
                        <th><b>Sport</b></th>
                        <td><Link to={`/cards/sport/${sport}`}>{sport}</Link></td>
                    </tr>
                    <tr className="det">
                        <th><b>Rating</b></th>
                        <td><Link to={`/cards/rating/${rating}+100`}>{rating}</Link></td>
                    </tr>
                    <tr className='det'>
                        <th><b>Cards In Stock</b></th>
                        <td><b>{quantity}</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default Details
