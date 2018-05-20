import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../actions/index'

export default function(ComposedClass){
    class Auth extends Component{
        state = {
            loading: true
        }
        componentWillMount(){
            this.props.dispatch(auth())
        }
        render(){
            if(this.state.loading){
                return <div className="loader">loading...</div>
            }
            return <ComposedClass {...this.props} user=""/>
        }
    }

    function mapStateToProps(state){
        console.log(state.getUser)
        return{
             user: state.getUser
        }
    }

    return connect(mapStateToProps)(Auth)
}