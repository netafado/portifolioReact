import React, { Component } from 'react'
import Layout from '../components/layout/index'
import About from '../components/home/about'
import Works from '../components/home/Works'
import AnimationPage from '../components/animation/PageAnimation'
import ScreenSize from '../utils/screenSize'
import Posts from '../components/home/posts'
import '../components/home/style.css'
import Scroll from 'react-anchor-link-smooth-scroll'
import {connect} from 'react-redux'
import { getPosts } from '../actions'

class Home extends Component{
    componentWillMount(){
        this.props.dispatch(getPosts(4, "portifolio"))
    }
    windowScroll(){
        document.querySelector('#posts').scrollIntoView({ 
            behavior: 'smooth',
            block: 'end'
          });
    }
    render(){
        return(
        <Layout active={this.props.active}>
            <AnimationPage type="fade">
                <div className="content" >
                    <ScreenSize classes="flex-center">
                        <div className="home" id="home">
                            <About /> 
<<<<<<< HEAD
                            <Works />
                            <Scroll href="#posts"  className="descerPointer">
                                <img src="img/baixo.svg" style={{'maxWidth':'80px'}} alt="Para baixo" />
                            </Scroll>
=======
                            <Works /> 
                            <a href="#posts" onClick={this.windowScroll} className="arrowDown">
                                <img src="img/baixo.svg" style={{'maxWidth':'80px'}} alt="Para baixo"/>
                            </a>
>>>>>>> 33163a446ef8ba11b2283572ff45eac407c0cb08
                        </div>
                    </ScreenSize>
                    <Posts id="posts" posts={this.props.posts.posts} />
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