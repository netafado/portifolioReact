import React, { Component } from "react";
import Layout from '../layout/index'
import AnimationPage from '../animation/PageAnimation';
import axios from 'axios';
import config from '../../config';
class newPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "isaias",
            content: "teste",
            desc: "adfasdf",
            img: "",
            author: props.login.id

         }
    }

    async sendRequest (e){
        let that = this;
        console.log(that)
        e.preventDefault();
        await axios.post(`${config.API_URL}/blog`, that.state, {withCredentials: true})
            .then(data => {console.log(data)})
            .catch(err =>  {console.log(err)})
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
                        <form onSubmit={this.sendRequest.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Title</label>
                                <input type="text" className="form-control" id="title" placeholder="Titulo" name="title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">descricao</label>
                                <input type="text" className="form-control" id="descricao" placeholder="descricao" name="descricao"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Conteudo</label>
                                <textarea className="form-control" rows="3" name="content"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">descricao</label>
                                <input type="file" name="pic" accept="image/*" />
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