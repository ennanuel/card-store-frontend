import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Error, Loading, NothingFound } from '../components/fetch_states';
import { OrderCard, OrdersFilters } from '../components/order';
import { Pagination } from '../components'
import { useGetOrdersQuery } from '../state/api';
import '../styles/order.scss';

const FETCH_TYPES = ['all', 'pending', 'success', 'cancelled'];

const Orders = () => {
    const { _id } = useSelector(state => state.user);
    const { filter, page } = useParams();
    const currentPage = useMemo(() => /nan/i.test(Number(page)) ? 0 : Number(page));
    const pageFilter = useMemo(() => FETCH_TYPES.find(elem => elem === filter) || 'all', [filter]);
    const { data, isFetching, error } = useGetOrdersQuery({ user_id: _id, fetchType: pageFilter, currentPage });
    const { orders, totalPages } = useMemo(() => data || { totalPages: 0, orders: [] }, [data]);
    const currentFilter = useRef(pageFilter);
    const navigate = useNavigate();

    useEffect(() => { 
        if (currentFilter.current === pageFilter) return;
        currentFilter.current = pageFilter;
        navigate(`/orders/${pageFilter}/0`);
    }, [pageFilter, currentFilter]);

    return (
        <section className="orders">
            <h3 className="title full-border">Your orders</h3>
            <div className="container">
                <OrdersFilters fetchTypes={FETCH_TYPES} currentPage={currentPage} />
                {
                    isFetching ?
                        <Loading text="Fetching Orders" /> :
                        error ?
                            <Error text="Something went wrong" /> :
                            orders.length < 1 ? 
                                <NothingFound text="No orders available." /> :
                                <ul className='orders-list flex-col'>
                                    {
                                        orders.map((card) => (
                                            <li key={card._id}><OrderCard {...card} /></li>
                                        ))
                                    }
                                </ul>
                }
                <Pagination to={`/orders/${pageFilter}`} totalPages={totalPages} />
            </div>
        </section>
    )
}

export default Orders
