import axios from 'axios';
import config from '../config'
export function logInUser({email, password}){
    const request = axios.post(`${config.API_URL}/user/login`,{
        email,
        password
    })
    .then(response => response.data)   
    return {
        type: 'USER_LOG_IN',
        payload: request
    }
} 