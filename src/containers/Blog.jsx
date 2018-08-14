import React, { Component } from 'react'
import Layout from '../components/layout'
import PageAnimation from '../components/animation/PageAnimation'
import '../components/blog/style.css'
import ItemBlog from '../components/blog/blogItem'

import { connect  } from 'react-redux'
import { getPosts } from '../actions/index'
class Blog extends Component{
    componentWillMount(){
        this.props.dispatch(getPosts(8, 'blog'))
    }
    render(){
        console.log(this.props)
        return(
            <Layout >
                <PageAnimation type="fade">
                    <div className="page-blog container-fluid">
                        <h1>Blog</h1>                       
                         {this.props.posts && this.props.posts.length > 0 ? <ItemBlog blog={this.props.posts}/> : <p>Nenhum post por enquanto</p>}
                    </div>
                </PageAnimation>
            </Layout>            
        )
    }
}

function mapStateToProps(state){
    return{
        posts: state.blog.posts
    }
}

export default connect(mapStateToProps, null)(Blog)