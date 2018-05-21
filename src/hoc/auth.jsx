import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../actions/index'
import './style.css'

export default function(ComposedClass){
    class Auth extends Component{
        state = {
            loading: true
        }
        componentWillMount(){
            this.props.dispatch(auth())
        }
        componentWillReceiveProps(nextProps){
            
            this.setState({
                loading: false
            });

            if(!nextProps.login.user.isAuth){
                this.props.history.push('/admin')
            }           
        }
        render(){
            if(this.state.loading){
                return (
                <div className='w-loader'>
                    <div className="loader">
                        <div>loading...</div>
                    </div>
                </div>
)
            }
            return <ComposedClass {...this.props} {...this.props.user}/>
        }
    }

    function mapStateToProps(state){
        return{
             login: state.getUser
        }
    }

    return connect(mapStateToProps)(Auth)
}