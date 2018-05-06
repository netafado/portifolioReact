import React, { Component } from 'react'
import Layout from '../layout'
import PageAnimation from '../animation/PageAnimation'
import './style.css'
import ItemBlog from './blogItem'
class Blog extends Component{
    state = {
        blog: [
            {
                title: 'asdfasdfasd',
                desc: 'sadfasdf asdfasd fads asdf dadfad fasdfadsfasd fasdfadsfasdf',
                img:'/img/asteroid.jpg'
            },
            {
                title: 'asdfasdfasd',
                desc: 'sadfasdf asdfasd fads asdf dadfad fasdfadsfasd fasdfadsfasdf',
                img:'/img/asteroid.jpg'
            },
            {
                title: 'asdfasdfasd',
                desc: 'sadfasdf asdfasd fads asdf dadfad fasdfadsfasd fasdfadsfasdf',
                img:'/img/asteroid.jpg'
            },
            {
                title: 'asdfasdfasd',
                desc: 'sadfasdf asdfasd fads asdf dadfad fasdfadsfasd fasdfadsfasdf',
                img:'/img/asteroid.jpg'
            },
            {
                title: 'asdfasdfasd',
                desc: 'sadfasdf asdfasd fads asdf dadfad fasdfadsfasd fasdfadsfasdf',
                img:'/img/asteroid.jpg'
            }
        ]
    }
    render(){
        return(
            <Layout >
                <PageAnimation type="fade">
                    <div className="page-blog container-fluid">
                        <h1>Blog</h1>                       
                         <ItemBlog blog={this.state.blog}/>
                    </div>
                </PageAnimation>
            </Layout>            
        )
    }
}

export default Blog