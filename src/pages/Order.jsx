import { useMemo } from 'react'
import { useGetOrderQuery } from '../state/api'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Loading } from '../components/fetch_states';
import { convertNumberToPriceFormat, convertToDateFormat } from '../utils/site';

const Order = () => {
  const { id } = useParams();
  const { _id: user_id } = useSelector(state => state.user);
  const { data, isFetching, error } = useGetOrderQuery({ order_id: id, user_id });
  const { _id, cards, destination, amount, status, createdAt } = useMemo(() => data || {}, []);
  const date = useMemo(() => convertToDateFormat(createdAt), [createdAt]);
  const price = useMemo(() => convertNumberToPriceFormat(amount?.toFixed(2)), [amount])

  if (isFetching) return <Loading text="Fetching order details..." />
  if (error) return <Error text="Something went wrong." />
  
  return (
    <section className="order">
      <h2 className="title full-border">Order Details</h2>
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
