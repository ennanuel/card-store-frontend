import React from 'react'

const PricingInfo = ({ shippingCost, total }) => {
    return (
        <tbody className="total">
            <tr>
                <td colSpan={4} className="total-title">Shipping Handling:</td>
                <td colSpan={2}>${shippingCost?.toFixed(2)}</td>
            </tr>
            <tr>
                <td colSpan={4} className="total-title">Order Total:</td>
                <td colSpan={2}>${total?.toFixed(2)}</td>
            </tr>
        </tbody>
    )
};

export default PricingInfo
