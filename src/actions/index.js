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

export async function getPosts(limit, type){
    const URL = `${process.env.API_URL||config.API_URL}/blog?type=${type}&limit=${limit}`
    const req = await axios.get(URL, {withCredentials: true})
                            .then((res)=>{
                                return res.data
                            })
                            .catch(err => {
                                return{
                                    err
                                }
                            })
    return {
        type: "GET_POSTS",
        payload: req
    }
}

export async function getPostByAuthor(id){
    const URL = `${process.env.API_URL||config.API_URL}/blog/user/posts/${id}`
    const req = await axios.get(URL, {withCredentials:true})
                    .then((resp)=>{
                        return resp
                    })
                    .catch(err => err)
    console.log(req);
    return{
        type: "GET_POSTS_BY_USER",
        payload: req.data
    }
}

export async function deletePostById(id){
    const URL = `${process.env.API_URL||config.API_URL}/blog/${id}`
    const req = await axios.delete(URL, {withCredentials:true})
                    .then((resp)=>{
                        return resp
                    })
                    .catch(err => err)
    console.log(req);
    return{
        type: "DELETE_POST",
        payload: req
    }
}


export async function getPost(id){
    const req = await axios.get(`${process.env.API_URL||config.API_URL}/blog/${id}`, {withCredentials: true})
                            .then((res)=>{
                                return res.data
                            })
                            .catch(err => {
                                return{
                                    err
                                }
                            })
    return {
        type: "GET_POST",
        payload: req
    }
}