import React, { Component } from "react";
import Layout from '../layout/index'
import AnimationPage from '../animation/PageAnimation';
import axios from 'axios';
import config from '../../config';
import RichTextEditor from 'react-rte';
import Error  from '../../utils/msg'
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
            type: null,
            err: null,
            sended: null

         }
    }

    getFormReady(){
        let errs = []; 
        const fd = new FormData();
        if(this.state.title === '' || this.state.title.length < 4){
            errs.push('Title is required');
        }
        this.state.content.toString('html')

        if(this.state.content.toString('html') ===   ""){
            errs.push('content is required');
        }

        fd.append('img', this.state.img);
        fd.append('title', this.state.title);
        fd.append('desc', this.state.desc);
        fd.append('content', this.state.content.toString('html'));
        fd.append('author', this.state.author);
        fd.append('thumb', this.state.thumb);
        fd.append('type', this.state.type);

        if(errs.length > 0)
        {
            return new Error('O formulário contém erros')
        }            
        return fd;
    }
     
    async sendRequest (e){

        e.preventDefault();
        const fd = this.getFormReady();
        if(fd instanceof Error)
        {
            this.setState({
                err: 'todos os campos são obrigatorios'
            });
            return;
        }
        let btn = document.getElementById('btnEnviar');
        btn.innerHTML = "Enviando";
        btn.setAttribute('disabled', true);

        await axios.post(`${config.API_URL}/blog`, fd, {withCredentials: true})
            .then(data => {
                if(data.data.err)
                {
                    this.setState({
                        err: data.data.err
                    });
                }
                    
                btn.removeAttribute('disabled');
                btn.innerHTML = "Enviar";
                this.setState({
                    sended: 'Post atualizado com sucesso'
                });
                //limpar a tela
                this.setState({
                    title: "",
                    content: RichTextEditor.createEmptyValue(),
                    desc: "",
                    img: null,
                    thumb: null,
                    author: this.props.login.user.id,
                    type: null,
                    err: null,
                })
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
        this.setState({
            img: e.target.files[0]
        })
    }
    radioButton(e){   
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
        console.log(this.state.err)
        return ( 
        
        <Layout>
            <AnimationPage type="fade">
                <div className="container">
                    {this.state.err ? <Error type="err" msg={this.state.err}/> : null}
                    {this.state.sended ? <Error type="info" msg={this.state.sended}/> : null}
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