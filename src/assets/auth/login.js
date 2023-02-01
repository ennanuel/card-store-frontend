export const checkLogin = (data, setUser, setAuthStatus, navigate) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(data);

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:5000/api/auth/login", requestOptions)
    .then(response => {
        if(response.status !== 200) {
            setAuthStatus('Incorrect username or password')
            throw new Error(response);
        } else { 
            response.json()
                .then( dat => {
                    setUser(dat);
                    localStorage.setItem('user', JSON.stringify(dat));
                    navigate('/');
                })
        }
    })
    .catch(error => {
        console.log(error)
    });
}