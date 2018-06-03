import React, { Component } from 'react'
import Layout from '../components/layout'
import PageAnimation from '../components/animation/PageAnimation'
import { connect } from 'react-redux'
import {getPost} from '../actions/index'

class BlogArtigo extends Component{
    state = {
        post: {
            title: 'teste',
            content: "sadfadsfasdf asdfa sdf fasdfasd",
            img: 'asdfasdfasd.jpg'
        }
    }
    componentWillMount(){
        const id = this.props.match.params.id
        this.props.dispatch(getPost(id));
    }
    render(){
        
        console.log(this.props)
        return(
            <Layout >
                <PageAnimation type="fade">
                    { this.props.post ?
                    
                    <div className="page-blog container">
                        <h1>{this.props.post.title}</h1>
                        <div className="conteudo">
                            {this.props.post.title}
                        </div>
                        <div className="img-wrapper">
                            <img className="img-responsive" src={`http://api.isaiasfrancisco.com.br/upload/${this.props.post.img}`} />
                        </div>                     
                    </div>               
                
                :

                <h2>carregando</h2>
                
                }

                </PageAnimation>
            </Layout> 
        )          
        
    }
}


function mapStateToProps(state){
    return{
        post: state.posts.post
    }
}

export default connect(mapStateToProps, null)(BlogArtigo);