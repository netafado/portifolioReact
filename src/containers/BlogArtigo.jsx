import React, { Component } from 'react'
import Layout from '../components/layout'
import PageAnimation from '../components/animation/PageAnimation'
import Loader from '../utils/carregando'
import { connect } from 'react-redux'
import config from '../config'
import {getPost} from '../actions/index'

class BlogArtigo extends Component{
    state = {
        post: {
            title: 'teste',
            content: "sadfadsfasdf asdfa sdf fasdfasd",
            img: 'asdfasdfasd.jpg'
        },
        carregando: true
    }
    componentWillMount(){
        console.log("will mount");
        const id = this.props.match.params.id
        this.props.dispatch(getPost(id));
    }


    componentWillReceiveProps(nextProps){
        this.setState({
            carregando: false
        })
    }

    imgLoading(){
        console.log("img-load");
    }

    componentDidMount(){
        console.log("did mount");
    }
    template(type){
        switch(type){
            case 'portifolio':
                return(
                    <div>
                        <div className="img-wrapper">                            
                            <img className="img-responsive" src={`${config.DOMAIN}/upload/${this.props.post.img}`} onLoad={this.imgLoading.bind(this)} alt="imagem principal" />
                        </div> 
                        <div className="conteudo" dangerouslySetInnerHTML={{__html: this.props.post.content}}>
                        </div>
                    </div>
                );
            break;
            case 'blog':
                return(
                    <div>
                        <div className="img-wrapper">                            
                            <img className="img-responsive" src={`${config.DOMAIN}/upload/${this.props.post.img}`} onLoad={this.imgLoading.bind(this)} alt="imagem principal"  />
                        </div> 
                        <div className="conteudo" dangerouslySetInnerHTML={{__html: this.props.post.content}}>
                        </div>
                    </div>
                );
            break;
            default:
                return(
                    <div>
                        <div className="img-wrapper">                            
                            <img className="img-responsive" src={`${config.DOMAIN}/upload/${this.props.post.img}`} onLoad={this.imgLoading.bind(this)} alt="imagem principal" />
                        </div> 
                        <div className="conteudo" dangerouslySetInnerHTML={{__html: this.props.post.content}}>
                        </div>
                    </div>
                );
            break;
        }
    }
    render(){
        
        window.scrollTo(0, 0);
        console.log(this.props.post ? this.props.post.type :  " ")
        return(
            <Layout >
                <PageAnimation type="fade">
                    { this.props.post && !this.state.carregando ?                    
                        <div className="page-blog container">
                            <h1>{this.props.post.title}</h1>
                            {
                                this.template(this.props.post.type)
                            }                  
                        </div>                
                    :
                    <Loader carregando={this.state.carregando} />                
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