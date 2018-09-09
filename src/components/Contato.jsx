import React, { Component } from 'react'
import Layout from './layout/index'
import PageAnimation from './animation/PageAnimation'
import Msg from '../utils/msg'
import axios from 'axios'
import config from '../config'
import './style.css'

class Contato extends Component{
    constructor(props) {
        super(props)
        this.state = { 
            name: "",
            email: "",
            msg: "",
            err: "",
            sended: false,
            msgButton: "Enviar"
         }
    }
    changeName = (e) => {
        console.log(this.state);
        this.setState({
            name: e.target.value
        });
    }
    changeAssunto = (e) => {
        console.log(this.state);
        this.setState({
            email: e.target.value
        });
    }
    changeMsg = (e) => {
        console.log(this.state);
        this.setState({
            msg: e.target.value
        });
    }
    sendMail = ()=> {
        var errors = [];

        if(this.state.name === "" || this.state.name.length < 3){
            errors.push("Nome obrigatório");
        }
        if(this.state.email === "" || this.state.email.length < 3 ||
            this.state.email.indexOf('@') < 0){
            errors.push("email obrigatório");
        }
        if(this.state.msg === "" || this.state.msg < 8){
            errors.push("Preencha o campo de mensagem");
        }

        if(errors.length > 0){
            this.state.err = " ";
            var msg = "";
            errors.forEach((err)=>{
                msg += err;
                msg += ", ";
            })
            this.setState({
                err: msg
            });
            return
        }
        // mudar o botão para dar feedback ao usuario
        let btnSend = document.getElementById('btnSend');
        btnSend.setAttribute('disabled', "true");
        btnSend.innerHTML = "Enviando...";

        axios.post(`${config.API_URL}/mail`, 
                {msg: this.state.msg, name: this.state.name,email: this.state.email }, 
                {withCredentials:true})
                .then((data)=>{
                    this.setState({sended: true});
                    // mudar o botão para dar feedback ao usuario
                    btnSend.setAttribute('disabled', "false");
                    btnSend.innerHTML = "Enviar";
                });
    }
    render(){
        return(
            <Layout>            
            <PageAnimation type="fade">
                <div className="container">
                    {this.state.err ? <Msg type="err" msg={this.state.err} /> : null}
                    {this.state.sended ? <Msg type="info" msg="Tudo certo!! Mensagem enviada." /> : null}
                    <h1>Contato</h1>
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="pd-40-top">cel.: +55 11 98893 7856</p>
                            <p>email.: contato@isaiasfrancisco.com.br</p>
                        </div>
                        <div className="col-sm-6">
                       
                            <div className="form-group clearfix">
                                <div className="col-md-12">
                                    <input id="name" name="name" type="text" placeholder="Seu nome" className="form-control" onChange={this.changeName}/>
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <div className="col-md-12">
                                    <input id="email" name="email" type="text" placeholder="seu email" className="form-control" onChange={this.changeAssunto}/>
                                </div>
                            </div>
                    
                            <div className="form-group clearfix">
                                <div className="col-md-12">
                                    <textarea className="form-control" id="message" name="message" placeholder="Digite sua mensagem..." rows="5" onChange={this.changeMsg}></textarea>
                                </div>
                            </div>
                    
                            <div className="form-group clearfix">
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-primary btn-lg" id="btnSend" onClick={this.sendMail}>Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageAnimation>
        </Layout>
        )
    }
}



export default Contato
