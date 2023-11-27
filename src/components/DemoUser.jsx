import React, { useMemo } from 'react'
import { getProfilePic } from '../utils/card';

const DemoUser = ({ username, password, chooseUser, profilePic, names, isAdmin }) => {
    const profileImage = useMemo(() => getProfilePic(profilePic), []);

    return (
        <li
            className="flex-col"
            onClick={() => chooseUser({ username, password })}
        >
            <div className="top">
                <img src={profileImage} className="full-w full-border" alt="" />
            </div>
            <div className="bottom flex-col">
                <p className="names"><b>{`${names.first} ${names.last}`}</b></p>
                <p className={`role relative ${isAdmin && 'admin'}`}>{isAdmin ? 'Admin' : 'Customer'}</p>
            </div>
        </li>
    )
};

export default DemoUser
