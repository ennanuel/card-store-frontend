export const addCard = async (data, navigate) => {
    const user = localStorage.getItem('user');
    const myHeaders = new Headers();

    myHeaders.append("token", user.accessToken);
    
    const formData = new FormData();

    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value)
    }
    
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formData,
      redirect: 'follow'
    };
    
    fetch("http://localhost:5000/api/player/create", requestOptions)
      .then(response => response.text())
      .then(result => navigate('/'))
      .catch(error => console.log('error', error));
}