import React, { Component } from 'react'
import Layout from '../components/layout'
import PageAnimation from '../components/animation/PageAnimation'
import '../components/blog/style.css'
import ItemBlog from '../components/blog/blogItem'

import { connect  } from 'react-redux'
import { getPosts } from '../actions/index'
class Blog extends Component{
    componentWillMount(){
        this.props.dispatch(getPosts(null, 'portifolio'))
    }
    render(){
        console.log(this.props)
        return(
            <Layout >
                <PageAnimation type="fade">
                    <div className="page-blog container-fluid">
                        <h1>Portifolio</h1>                       
                         {this.props.posts ? <ItemBlog blog={this.props.posts}/> : null}
                    </div>
                </PageAnimation>
            </Layout>            
        )
    }
}

function mapStateToProps(state){
    return{
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Blog)