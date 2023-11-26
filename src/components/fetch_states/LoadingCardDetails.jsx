import React from 'react'

const LoadingCardDetails = () => {
    return (
        <div style={{ padding: '10px' }} className="player-info">
            <div className="player-name flex-row ai-center">
                <p className="loading_names"></p>
            </div>
            <div className="player-card-desc">
                <p className="loading_desc"></p>
            </div>
            <table className="additional-det loading-det full-w">
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
        </div>
    )
};

export default LoadingCardDetails
