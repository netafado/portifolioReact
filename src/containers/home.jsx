import React, { Component } from 'react'
import Layout from '../components/layout/index'
import About from '../components/home/about'
import Works from '../components/home/Works'
import AnimationPage from '../components/animation/PageAnimation'
import ScreenSize from '../utils/screenSize'
import Posts from '../components/home/posts'
import '../components/home/style.css'
import {connect} from 'react-redux'
import { getPosts } from '../actions'

class Home extends Component{
    componentWillMount(){
        this.props.dispatch(getPosts())
    }
    render(){
        return(
        <Layout active={this.props.active}>
            <AnimationPage type="fade">
                <div className="content" >
                    <ScreenSize classes="flex-center">
                        <div className="home" id="home">
                            <About /> 
                            <Works /> 
                        </div>
                    </ScreenSize>
                    <Posts posts={this.props.posts.posts} />
                </div>
            </AnimationPage>
        </Layout>
        )
    }
}

function mapStateToProps(state){
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps, null)(Home) 