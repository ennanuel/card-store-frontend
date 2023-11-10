import React, { useEffect } from 'react';
import { NavBar, Notification, Footer } from './header_footer';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserCart } from '../state/features/cartSlice';
import { fetchCategories } from '../state/features/categorySlice';

const Layout = () => {
    const { _id } = useSelector(state => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserCart(_id));
        dispatch(fetchCategories());
    }, [_id]);

    return (
        <>
            <NavBar />
            <Notification />
            <section className="content">
                <Outlet />
            </section>
            <Footer />
        </>
    )
};

export default Layout
