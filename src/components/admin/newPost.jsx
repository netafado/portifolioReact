import React, { Component } from "react";
import Layout from '../layout/index'
import AnimationPage from '../animation/PageAnimation';
import axios from 'axios';
import config from '../../config';
import RichTextEditor from 'react-rte';
class newPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "",
            content: RichTextEditor.createEmptyValue(),
            desc: "",
            img: null,
            author: this.props.login.user.id 

         }
    }
     
    async sendRequest (e){
        e.preventDefault();
        const fd = new FormData();
        fd.append('img', this.state.img);
        fd.append('title', this.state.title);
        fd.append('content', this.state.content.toString('html'));
        fd.append('author', this.state.author)
        console.log(this.state)
        await axios.post(`${config.API_URL}/blog`, fd, {withCredentials: true})
            .then(data => {console.log(data)})
            .catch(err =>  {console.log(err)})
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
    render() {
        console.log(this.state)
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
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Conteudo</label>
                                <RichTextEditor
                                    value={this.state.content}
                                    onChange={this.contentChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">descricao</label>
                                <input type="file" name="image" accept="image/*" onChange={this.imgChange.bind(this)}/>
                            </div>
                            
                            <button type="submit" className="btn btn-default">Confirm identity</button>
                        </form>
                    </div>
                </div>

            </AnimationPage>
        </Layout>
        )
    }
}
 
export default newPost;