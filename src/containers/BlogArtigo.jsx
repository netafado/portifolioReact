import React, { Component } from 'react'
import Layout from '../components/layout'
import PageAnimation from '../components/animation/PageAnimation'
import Loader from '../utils/carregando'
import { connect } from 'react-redux'
import config from '../config'
import {getPost} from '../actions/index'
import { Link } from 'react-router-dom'

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

    onclickBeforeAffter(){
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
                            <img className="img-responsive" src={`${config.DOMAIN}/upload/${this.props.post.current.img}`} onLoad={this.imgLoading.bind(this)} alt="imagem principal" />
                        </div> 
                        <div className="conteudo" dangerouslySetInnerHTML={{__html: this.props.post.current.content}}>
                        </div>
                        
                        <div className="row">
                            <div className="col-sm-12">
                                {this.props.prevpost || this.props.nextpost ? <hr /> : null}
                                {this.props.post.prevpost ? 
                                    <Link to={`/post/${this.props.post.prevpost._id}`}  onClick={this.onclickBeforeAffter}><p className="text-left">Anterior</p></Link>
                                    :
                                    null
                                }
                                {this.props.post.nextpost ? 
                                    <Link to={`/post/${this.props.post.nextpost._id}`} onClick={this.onclickBeforeAffter}><p className="text-right">Proximo</p></Link>
                                    :
                                    null
                                }
                            </div>                        
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-12">
                                <Link to="/portifolio">Voltar para Portifolio</Link>
                            </div>                            
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
                        {this.props.post.prevpost ? 
                            <h1>Tem post</h1>
                            :
                            console.log('não tem')
                        }
                        <div className="row">
                             <Link to="/portifolio">Voltar para Blog</Link>
                        </div>
                    </div>
                );
            break;
        }
    }
    render(){
        
        window.scrollTo(0, 0);
        console.log(this.props);
        console.log(this.props.post ? this.props.post.type :  " ")
        return(
            <Layout >
                <PageAnimation type="fade">
                    { this.props.post && this.props.post.current && !this.state.carregando ?                    
                        <div className="page-blog container">
                            <h1>{this.props.post.current.title}</h1>
                            {
                                this.template(this.props.post.current.type)
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