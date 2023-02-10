import { apiURL } from "../data";

export const checkLogin = (data, setUser, setAuthStatus, navigate, setLoading) => {
    setLoading(true)

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(data);

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(`${apiURL}/auth/login`, requestOptions)
    .then(response => {
        if(response.status !== 200) {
            setAuthStatus('Incorrect username or password')
            throw new Error(response);
        } else { 
            return response.text()     
        }
    })
    .then( dat => {
        setUser(JSON.parse(dat));
        setLoading(false)
        localStorage.setItem('user', dat);
        navigate('/');
    })
    .catch(error => {
        setLoading(false)
        console.log(error)
    });
}