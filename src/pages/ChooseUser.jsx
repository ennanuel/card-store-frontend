import React from 'react';
import { Link } from 'react-router-dom';
import { Error, Loading } from '../components/fetch_states';
import emptyImage from '../assets/card-images/Sample_User_Icon.png';
import { useGetUsersToChooseQuery } from '../state/api';
import '../styles/choose-user.scss';
import { login } from '../utils/login';
import { authenticateUser } from '../state/features/userSlice';
import { useDispatch } from 'react-redux';

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
            <div className="container full-w">
                <h1 className='title full-border'>Choose a demo account</h1>
                {
                    isFetching ?
                        <Loading text="Fetching demo accounts..." /> :
                        error ?
                        <Error text="Could not fetch demo accounts" /> :
                        <ul className="flex-row flex-wrap">
                            {
                                data?.map(({ _id, profilePic, username, password, names, isAdmin }) => (
                                    <li
                                        key={_id}
                                        className="flex-col"
                                        onClick={() => chooseUser({ username, password })}
                                    >
                                        <div className="top">
                                            <img src={profilePic || emptyImage} className="full-w full-border" alt="" />
                                        </div>
                                        <div className="bottom flex-col">
                                            <p className="names"><b>{`${names.first} ${names.last}`}</b></p>
                                            <p className={`role relative ${isAdmin && 'admin'}`}>{ isAdmin ? 'Admin' : 'Customer' }</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
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