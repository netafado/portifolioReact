import React, { Component } from 'react'
import Layout from '../layout/index'
import AnimationPage from '../animation/PageAnimation'
import ScreenSize from '../../utils/screenSize'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './style.css'
import {bindActionCreators } from 'redux';

import {connect} from 'react-redux'
import config from '../../config'

class Admin extends Component{
    state = {
        auth: false
    }
    sendInfo(e){
        let email = document.getElementById('inputEmail').value;
        let password = document.getElementById('inputPassword').value;
        e.preventDefault();
        console.log(this.state);
        axios.post(`${config.API_URL}/user/login`,{
            email: email,
            password: password
        })
        .then(response => {
            console.log(response.data);
            this.setState({auth: response.data.auth})
        })
    }
    
    render(){
        if(this.state.auth){
            return <Redirect to='/profile' />
        }
        return (
            <Layout>
                <AnimationPage type="fade">
                    <ScreenSize classes="container flex-menu-form">
                        <div className="card card-form card-container col-md-4 col-md-offset-4">
                            <p id="profile-name" className="profile-name-card"></p>
                            <form className="form-signin">
                                <span id="reauth-email" className="reauth-email"></span>
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required   />
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required  />
                                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" onClick={this.sendInfo.bind(this)}>Sign in</button>
                            </form>
                        </div>
                    </ScreenSize>            
                </AnimationPage>
            </Layout>
        )        
    }
}
function mapStateToProps(state){
    return{
        artists: state.artists
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);