import axios from 'axios';
import config from '../config'
export function logInUser({email, password}){
    const request = axios.post(`${process.env.API_URL||config.API_URL}/user/login`,{
        email,
        password
    })
    .then(response => {
        console.log(response)
        return response.data
    })   
    return {
        type: 'USER_LOG_IN',
        payload: request
    }
} 


export function auth(){
    const request =axios.get(`${process.env.API_URL||config.API_URL}/user/auth`)
                        .then((response)=>{
                                return response.data;
                        })
    return{
        type: "IS_AUTH",
        payload :request
    }
}