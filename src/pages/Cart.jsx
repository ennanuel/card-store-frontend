import { PageInfo } from '../components'
import '../styles/cart/cart.css'

const Cart = () => {
  const dat = 'abcdefghij'.split('')

  return (
    <div className="cart">
      <PageInfo />
      <table className="full-w full-border">
        <colgroup>
          <col style={{width: '50%'}} />
          <col style={{width: '16.67%'}} />
          <col style={{width: '16.67%'}} />
          <col style={{width: '16.67%'}} />
        </colgroup>
        <tbody>
          <tr className="grey-col">
            <th className="first-row"><b>ITEM</b></th>
            <th><b>QTY</b></th>
            <th><b>PRICE</b></th>
            <th><b>TOTAL</b></th>
          </tr>
        </tbody>
        <tbody className="items">
          {
            dat.map( (elem, i) => (
              <tr className={`${ i % 2 > 0 && 'grey-col'}`}>
                <td className="first-row">CARD - Lionel Messi</td>
                <td>2</td>
                <td>$20</td>
                <td>$10</td>
              </tr>
            ) )
          }
        </tbody>
        <tbody className="total">
          <tr>
            <td colspan={3} className="total-title">Subtotal:</td>
            <td>$2.05</td>
          </tr>
          <tr>
            <td colspan={3} className="total-title">Shipping Handling:</td>
            <td>$99.99</td>
          </tr>
          <tr>
            <td colspan={3} className="total-title">Order Total:</td>
            <td>$102.04</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Cart
