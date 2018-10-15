import React from 'react'
import Layout from '../layout/index'
import AnimationPage from '../animation/PageAnimation'
import { Link } from 'react-router-dom'




const Profile = (props)=>{
    return(
        <Layout>
            <AnimationPage type="fade">
                <div className="container">
                    <div className="col-sm-12">
                        <h1>Profile</h1>
                        <p>{props.login.user ? props.login.user.name : '' }</p>
                        <p>{props.login.user ? props.login.user.email : '' }</p>
                    </div>
                    <div className="info">
                        <Link to="user/post"> Novo post</Link>
                    </div>
                    <div className="info">
                        <Link to={`user/posts/${props.login.user.id}`} > Editar posts</Link>
                    </div>
                    <div className="info">
                        <Link to={`/financas/`} > Financas</Link>
                    </div>
                </div> 
            </AnimationPage>
        </Layout>
    )
}

export default Profile;

