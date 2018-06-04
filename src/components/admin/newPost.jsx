import React, { Component } from "react";
import Layout from '../layout/index'
import AnimationPage from '../animation/PageAnimation';
import axios from 'axios';
import config from '../../config';
import RichTextEditor from 'react-rte';
import './style.css';
class newPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "",
            content: RichTextEditor.createEmptyValue(),
            desc: "",
            img: null,
            thumb: null,
            author: this.props.login.user.id,
            type: null

         }
    }
     
    async sendRequest (e){
        e.preventDefault();
        const fd = new FormData();
        fd.append('img', this.state.img);
        fd.append('title', this.state.title);
        fd.append('content', this.state.content.toString('html'));
        fd.append('author', this.state.author);
        fd.append('thumb', this.state.thumb);
        let btn = document.getElementById('btnEnviar');
        btn.innerHTML = "Enviando";
        btn.setAttribute('disabled', true);
        await axios.post(`${config.API_URL}/blog`, fd, {withCredentials: true})
            .then(data => {
                console.log(data);
                btn.removeAttribute('disabled');
                btn.innerHTML = "Enviar";
            })
            .catch(err =>  {
                console.log(err)
            })
    }

    titleChange(e){
        this.setState({
            title: e.target.value
        })
    }

    descChange(e){
        this.setState({
            desc: e.target.value
        })
    }

    contentChange(e){        
        this.setState({
            content: e
        })
    }

    imgChange(e){  
        console.log(this.state)     
        this.setState({
            img: e.target.files[0]
        })
    }
    radioButton(e){   
        console.log(e.target.value)     
        this.setState({
            type: e.target.value
        })
    }
    thumbChange(e){        
        this.setState({
            thumb: e.target.files[0]
        })
    }
    render() {
        
        return ( 
        
        <Layout>
            <AnimationPage type="fade">
                <div className="container">
                    <div className="col-sm-12">
                    <h1>Add Post</h1>
                        <p>{this.props.login.user ? this.props.login.user.id : '' }</p>
                        <p>{this.props.login.user ? this.props.login.user.email : '' }</p>
                    </div>
                    <div>
                        <form onSubmit={this.sendRequest.bind(this)} encType="multipart/form-data">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Title</label>
                                <input type="text" className="form-control" id="title" placeholder="Titulo" name="title" onChange={this.titleChange.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">descricao</label>
                                <input type="text" className="form-control" id="descricao" placeholder="descricao" name="descricao" onChange={this.descChange.bind(this)}/>
                            </div>

                            <div className="radio" onChange={this.radioButton.bind(this)}>
                                <label><input type="radio" value="portifolio" name="type-post"/>portifolio</label>
                                <label><input type="radio"  value="blog" name="type-post"/>Blog</label>                                
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Conteúdo</label>
                                <RichTextEditor
                                    value={this.state.content}
                                    onChange={this.contentChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Grande</label>
                                <input type="file" name="image" accept="image/*" onChange={this.imgChange.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Thumb</label>
                                <input type="file" name="thumb" accept="image/*" onChange={this.thumbChange.bind(this)}/>
                            </div>
                            
                            <button type="submit" className="btn btn-default" style={{backgroundColor: "black"}} id="btnEnviar">Enviar</button>
                        </form>
                    </div>
                </div>

            </AnimationPage>
        </Layout>
        )
    }
}
 
export default newPost;