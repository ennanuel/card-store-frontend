import { createContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchUserInfo } from "../utils/user";

export const UserContext = createContext({ loading: false, error: false, userDetails: {} });

export const UserProvider = ({ children }) => {
    const { user_id } = useParams();
    const [{ loading, error, userDetails }, setData] = useState({ loading: false, error: false, userDetails: {} });

    function startLoading() { setData({ loading: true, error: false, userDetails: {} }) };
    function resetData() { setData({ loading: false, error: false, userDetails: {} }) };
    function handleFetchData(res) { setData({ loading: false, error: false, userDetails: res })};
    function handleError(error) {
        console.error(error);
        setData({ loading: false, error: true, userDetails: {} });
    };

    useEffect(() => { 
        resetData();
        startLoading();
        fetchUserInfo(user_id)
            .then(handleFetchData)
            .catch(handleError);
    }, [user_id])

    return (
        <UserContext.Provider values={{ error, loading, userDetails }}>
            {children}
        </UserContext.Provider>
    )
}