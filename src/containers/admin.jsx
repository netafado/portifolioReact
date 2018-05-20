import React, { Component } from 'react'
import Layout from '../components/layout/index'
import AnimationPage from '../components/animation/PageAnimation'
import ScreenSize from '../utils/screenSize'
import { Redirect } from 'react-router-dom'
import './style.css'

import {bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import config from '../config'

import {logInUser} from '../actions'

class Admin extends Component{
    state = {
        email: '',
        password: '',
        error: ''
    }

    handleEmailInput = (e)=>{
        this.setState({
            email: e.target.value
        })
    }
    handlePassInput = (e)=>{
        this.setState({
            password: e.target.value
        })
    }
    sendInfo(e){

        e.preventDefault();
        this.props.dispatch(logInUser(this.state))


    }

    componentWillReceiveProps(nextprops){
        console.log(nextprops)
            
    }
    
    render(){
        if(this.props.user && this.props.user.auth){
            return <Redirect to='/profile' {...this.props} />
        }
        return (
            <Layout>
                <AnimationPage type="fade">
                    <ScreenSize classes="container flex-menu-form">
                        <div className="card card-form card-container col-md-4 col-md-offset-4">
                            <p id="profile-name" className="profile-name-card"></p>
                            <form className="form-signin" onClick={this.sendInfo.bind(this)}>
                                <span id="reauth-email" className="reauth-email"></span>
                                <input type="email" id="inputEmail" 
                                        className="form-control" placeholder="Email address" required  
                                        value={this.state.email} 
                                        onChange={this.handleEmailInput.bind(this)}/>
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" 
                                        required value={this.state.password} 
                                        onChange={this.handlePassInput}/>
                                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" >Sign in</button>
                                {}
                            </form>
                        </div>
                    </ScreenSize>            
                </AnimationPage>
            </Layout>
        )        
    }
}
function mapStateToProps(state){
    console.log(state)
    return{
        user: state.getUser.user
    }
}


export default connect(mapStateToProps)(Admin);