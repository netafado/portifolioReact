import axios from 'axios';
import config from '../config'
export function logInUser({email, password}){
    const request = axios.post(`${process.env.API_URL||config.API_URL}/user/login`,{
        email,
        password
    },
    {
        withCredentials :true
    }
    )
    .then(response => {
        console.log(response)
        return response.data
    })   
    return {
        type: 'USER_LOG_IN',
        payload: request
    }
} 


export async function  auth(){
    const request = await axios.get(`${process.env.API_URL||config.API_URL}/user/auth`,{withCredentials: true})
                        .then((response)=>{                                
                                return response.data;
                        })
                        .catch(err =>{
                            return {
                                isAuth: false,
                                err
                            }
                        })
    return{
        type: "IS_AUTH",
        payload :request
    }
}