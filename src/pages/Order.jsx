import { useMemo } from 'react'
import { useGetOrderQuery } from '../state/api'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Loading } from '../components/fetch_states';
import { convertNumberToPriceFormat, convertToDateFormat } from '../utils/site';

const Order = () => {
  const { id } = useParams();
  const { _id: user_id } = useSelector(state => state.user);
  const { data, isFetching, error } = useGetOrderQuery({ order_id: id, user_id });
  const { _id, cards, destination, amount, status, createdAt } = useMemo(() => data || {}, [data]);
  const date = useMemo(() => convertToDateFormat(createdAt), [createdAt]);
  const price = useMemo(() => convertNumberToPriceFormat(amount?.toFixed(2)), [amount])

  if (isFetching) return <Loading text="Fetching order details..." />
  if (error) return <Error text="Something went wrong." />
  
  return (
    <section className="order">
      <div className="flex-row order-title title ai-center full-border">
        <h3>Order Details</h3>
        <Link to="/orders/all/0" className="flex-row ai-center jc-center"><AiOutlineArrowLeft /></Link>
      </div>
      <div className="order-details">
        <div className="top flex-row">
          <p className="date"><b>{status}</b></p>
          <p className="order-id">{_id}</p>
        </div>
        <h3 className="order-title">Ordered Items</h3>
        <ul>
          {
            cards?.map(({ _id, names: { first, middle, last }, quantity }) => (
              <li key={_id} className="flex-row">
                <p className="names">Card - <b>{first} {middle} {last}</b></p>
                <p>x{quantity}</p>
              </li>
            ))
          }
        </ul>
        <div className="bottom flex-row">
          <div className="flex-col left">
            <p className="destination"><b>{destination}</b></p>
            <p>{date}</p>
          </div>
          <div className="right flex-col">
            <p><b>Amount payed</b></p>
            <h3>$<b>{price}</b></h3>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Order
