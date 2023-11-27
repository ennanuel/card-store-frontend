import React from 'react';
import { Link } from 'react-router-dom';
import { Error, Loading, NothingFound } from '../components/fetch_states';
import emptyImage from '../assets/card-images/Sample_User_Icon.png';
import { useGetUsersToChooseQuery } from '../state/api';
import { login } from '../utils/login';
import { authenticateUser } from '../state/features/userSlice';
import { useDispatch } from 'react-redux';
import '../styles/choose-user.scss';
import DemoUser from '../components/DemoUser';

const ChooseUser = () => {
    const { data, isFetching, error } = useGetUsersToChooseQuery();
    const dispatch = useDispatch();

    async function chooseUser(user) {
        try {
            await login(user);
            dispatch(authenticateUser());
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className='choose-users flex-row ai-center jc-center'>
            <div className="account-container full-w">
                <h1 className='title full-border'>Choose a demo account</h1>
                {
                    isFetching ?
                        <Loading text="Fetching demo accounts..." /> :
                        error ?
                            <Error text="Could not fetch demo accounts" /> :
                            data?.length > 0 ?
                                <ul className="">
                                    {data?.map((user) => <DemoUser {...user} key={user._id} chooseUser={chooseUser} />)}
                                </ul> :
                                <NothingFound text="No demo accounts found." />
                }
                <div>
                    <p className="not-interested"><b>Or would you rather?</b></p>
                    <div className="others flex-row">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Sign up</Link>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ChooseUser;