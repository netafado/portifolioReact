import React, { Component } from 'react'
import Layout from '../components/layout/index'
import AnimationPage from '../components/animation/PageAnimation'
import ScreenSize from '../utils/screenSize'
import { Redirect } from 'react-router-dom'
import './style.css'
import Msg from '../utils/msg'
import {connect} from 'react-redux'
import {logInUser} from '../actions'

class Admin extends Component{
    state = {
        email: '',
        password: '',
        err: ''
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
         if(nextprops.user){
            if(nextprops.user.err){
                this.setState({err: nextprops.user.err})
            }
        }            
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

                            {this.state.err ? <Msg type="err" msg={this.state.err} /> : null}
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
    console.log(state.getUser.user)
    return{
        user: state.getUser.user
    }
}


export default connect(mapStateToProps)(Admin);