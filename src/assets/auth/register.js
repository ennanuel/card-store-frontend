export const registerAuth = ({...inputs}) => {
    for(let [input, value] of Object.entries(inputs)) {
        if(!value) return `${input} field can't be left empty`;
    }
    return 'All good'
}



export const registerReq = async (data, setAuthStatus, navigate) => {
    const {confirmPword, image, dob, ...others} = data
    const check = registerAuth(others)
    
    if(check !== 'All good') {
      return setAuthStatus(check)
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(others),
      redirect: 'follow'
    };

    fetch("http://localhost:5000/api/auth/register", requestOptions)
      .then(response => response.json())
      .then(result => {
        navigate('/login')
      })
      .catch(error => console.log('error', error));
}



export const passwordAuth = (pword, confirmPword) => {
    let judgement = ''
    let verdict = true;

    if(!pword && !confirmPword) return judgement;

    if(pword !== confirmPword) {
        judgement = 'Passwords do not match \n'
        verdict = false;
    }

    if(pword.length < 8) {
        judgement += 'Must have more than 8 characters \n';
        verdict = false;
    }

    if(!(/[A-Z]/).test(pword)) {
        judgement += 'Must have a combination of uppercase and lowercase letters \n';
        verdict = false;
    }

    if(!(/[\W]/).test(pword)) {
        judgement += 'Must contain at least one symbol (. / , - +)\n';
        verdict = false;
    }

    if(!(/[0-9]/).test(pword)) {
        judgement += 'Must contain at least one number \n';
        verdict = false
    }

    if(verdict) {
        judgement = 'All good'
    }

    return judgement.replace(/(\\n)$/, '');
}