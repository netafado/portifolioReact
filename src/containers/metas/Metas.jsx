import React, { Component } from 'react';
import Layout from '../../components/layout/'
import './metas.css'
import { connect } from 'react-redux'
import Modal from '../../components/metas/modal'
import config  from '../../config'
import moment from 'moment'
import axios from 'axios';
class ListarMeta extends Component {
    state = {
        listMetas: [],
        modal: false,
        editMetasIndex: null,
        meta: null,
        values: {
            value: null,
            desc: 'Testando'
        }
    }

    modalIndexMeta = (metaIndex)=>{
        console.log(metaIndex);
        this.setState(function(){
            return{
                editMetasIndex: metaIndex
            }
        })
        this.modal();
    }

    modal = ()=>{
        const modal = !this.state.modal;
        this.setState({
            modal
        })
    }
    componentWillMount(){
        axios.get(`${config.API_URL}/financa`, {withCredentials: true})
              .then(res => {
                  this.setState(()=>{
                      return {listMetas : res.data}

                  })
              })
    }

    deleteMeta = (id)=>{
        axios.delete(`${config.API_URL}/financa/delete/${id}`, {withCredentials: true})
              .then(res => {
                  this.setState(()=>{
                      return {listMetas : res.data}

                  })
              })
    }

    changeValue = (e) =>{
        console.log(this.state)
        let lista = {...this.state.values};
        lista.value = e.target.value;

        this.setState({
            values: lista
        })
        
    }
    changeDesc = (e) =>{
        console.log(this.state)
        let lista = {...this.state.values};
        lista.desc = e.target.value;

        this.setState({
            values: lista
        })
        
    }

    convertToMoney = (number)=>{
        // se tiver uma . trocar por ,
        // a cada 3
        var stringNumber  = number.toFixed(2).toString();
        stringNumber = stringNumber.replace(".", ",");
        return stringNumber;

    }
    addValue = async (id)=>{

        if(!this.state.values.value )
        {
            console.log("campo obrigatorio")
            return
        }
            
        let url = `${config.API_URL}/financa/${id}/addValue`;
        console.log(id);
        await axios.put(url, {value: this.state.values.value, idFin:id, desc: this.state.values.desc}, {withCredentials: true})
              .then(res => {
                 console.log(res.data)
              })
    }

    printMetas(metas){
        let list = metas.map((meta, i)=> {
            let totalvalue = meta.initialValue;
            for(let i = 0; i < meta.values.length; i++){
                totalvalue += meta.values[i].value;
            }
            return (
                <li key={i} onClick={()=> this.modalIndexMeta(i)}>
                    <span>{meta.name}</span>
                    <span><strong>Deadline</strong>: {moment(meta.deadline).format('DD/MM')}</span>
                    <span>{((meta.initialValue/meta.valueGoal) * 100).toFixed(2)}%</span>
                    <button className="btn-primary">Editar</button>
                </li>)

        })
        return list;
    }
    render(){
        return (
            <Layout>
                <Modal f_modal={this.modal} 
                                           show={this.state.modal}
                                           f_addValue={this.addValue}
                                           f_changeValue={this.changeValue}
                                           f_changeDesc={this.changeDesc}
                                           meta={this.state.listMetas[this.state.editMetasIndex]}/>
                <div className="container pd-40-top metas">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Suas metas</h2>
                            <ul className="metasflex">
                                {this.state.listMetas && this.state.listMetas.length > 0 ? this.printMetas(this.state.listMetas) : <h2>Nenhuma meta</h2>}
                            </ul>
                        </div>
                    </div>
                    <div className="row pd-80-top">
                        <div className="col-sm-4">
                            <h4>Indicadores econômicos </h4>
                                <ul>
                                    <li>CDI: 4.2%</li>
                                    <li>SELIC: 4.2%</li>
                                    <li>IPCA: {this.convertToMoney(2345.30)}</li>
                                </ul>
                        </div>
                    </div>
                    <div className="row pd-80-top">
                        <div className="col-sm-4">
                            <h4>Ideias </h4>
                                <ul>
                                    <li>Ter o perfil do investidor / para ajudar com as metas: Ex: A meta complomete mais de 30% da renda</li>
                                    <li>PEgar os valores de indices economicos</li>
                                    <li>Comparador de investimentos</li>
                                    <li>IPCA: 4.2%</li>
                                </ul>
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

export default connect(mapStateToProps, null)(ListarMeta) 