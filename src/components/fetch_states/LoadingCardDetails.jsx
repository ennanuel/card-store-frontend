import React from 'react'

const LoadingCardDetails = () => {
    return (
        <div style={{ padding: '10px' }} className="player-info">
            <h3 className="player-name flex-row ai-center">
                <span className="loading_names"></span>
            </h3>
            <p className="player-card-desc">
                <span><b>Description:</b></span>
                <br />
                <span className="loading_desc"></span>
            </p>
            <table className="additional-info">
            <table className="additional-det full-w">
                <colgroup>
                    <col style={{ width: '30%' }}></col>
                    <col style={{ width:'70%' }}></col>
                </colgroup>
                <tbody>
                    <tr className="det">
                        <th></th>
                        <td></td>
                    </tr>
                    <tr className="det">
                        <th></th>
                        <td></td>
                    </tr>
                    <tr className="det">
                        <th></th>
                        <td></td>
                    </tr>
                    <tr className='det'>
                        <th></th>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            </table>
            <div className="payment">
                <h3 className="price">
                    <span className="price_loading"></span>
                </h3>
            </div>
        </div>
    )
};

export default LoadingCardDetails
