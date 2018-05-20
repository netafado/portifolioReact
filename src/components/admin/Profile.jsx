import React, { Component } from 'react'
import Layout from '../layout/index'
import AnimationPage from '../animation/PageAnimation'
import ScreenSize from '../../utils/screenSize'
import { Redirect } from 'react-router-dom'




const Profile = (props)=>{
    console.log(props)
    return(
        <Layout>
            <AnimationPage type="fade">
                <div className="container">
                    <div className="col-sm-12">
                        <h1>Profile</h1>
                        <p>{props.nama}</p>
                    </div>
                </div> 
            </AnimationPage>
        </Layout>
    )
}

export default Profile;

