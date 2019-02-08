import React, { Component } from 'react';
import Layout from '../../components/layout/'
import './metas.css'
import { connect } from 'react-redux'
import config  from '../../config'
import axios from 'axios';
import Msg from '../../utils/msg'
class Meta extends Component {
    state = {
        name: "",
        desc: '',
        initialDate: "",
        deadline: "",
        valueGoal: 0,
        initialValue: 0,
        err: false,
        criado: false
    }
    resetState(){
        const resetState = {
            name: "",
            desc: '',
            initialDate: "",
            deadline: "",
            valueGoal: null,
            initialValue: 0,
            err: false,
            criado: false
        }
        
        this.setState({
            ...resetState
        })
    }
    sendInfo = async (e)=>{
        e.preventDefault();
        if(this.state.name === "" || this.state.desc === "" || this.state.valueGoal <= 1)
        {
            this.setState({err: true})
            return
        }
        await axios.post(`${config.API_URL}/financa`, this.state, {withCredentials: true})
                .then( data => {
                    this.resetState();
                    this.setState({
                        criado: true
                    })
                } )
                .catch(err => console.log(err));
    }
    changeState = (e, number = false) =>{
        this.setState(
            {
                [e.target.name] : number ? parseFloat( e.target.value) : e.target.value
            }
        )
    }
    render(){
        console.log(this.state)
        return (
            <Layout>
                {this.state.criado ? <Msg type="info" msg="Meta inserida"/> : null}
                {this.state.err ? <Msg type="err" msg="Alguma coisa esta errada"/> : null}
                <div className="container pd-40-top">
                    <div className="row">
                        <div className="col-sm-8">
                            <form onSubmit={this.sendInfo}  method="POST">
                                <div className="col-sm-12">
                                
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Title</label>
                                        <input type="text" className="form-control" id="name" placeholder="Titulo" value={this.state.name} name="name" onChange={this.changeState} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">descricao</label>
                                        <input type="text" className="form-control" id="descricao" placeholder="descricao"  value={this.state.desc} name="desc" onChange={this.changeState} required/>
                                    </div>                               
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">data inicial</label>
                                        <input type="date" className="form-control" id="name" placeholder="Inicio" value={this.state.initialDate} name="initialDate" onChange={this.changeState} required/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">data final</label>
                                        <input type="date" className="form-control" id="deadline" value={this.state.deadline} placeholder="Data final" onChange={this.changeState} name="deadline" required/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Valor incial</label>
                                        <input type="text" className="form-control" id="initialValue" placeholder="Valor Inicial" onChange={(e)=>{this.changeState(e, true)}}  value={this.state.initialValue} name="initialValue"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Valor final</label>
                                        <input type="text" className="form-control" id="valueGoal" placeholder="Valor Final da meta" onChange={(e)=>{this.changeState(e, true)}} value={this.state.valueGoal}  name="valueGoal"/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-default" style={{backgroundColor: "black"}} id="btnEnviar">Enviar</button>
                            </form>
                        </div>
                    </div>

                </div>
            </Layout>
            
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return {
        post: state.blog.post
    }
}

export default connect(mapStateToProps, null)(Meta) 