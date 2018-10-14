import React, { Component } from 'react';
import Layout from '../../components/layout/'
import './meta.css'
import { connect } from 'react-redux'
import Modal from '../../components/metas/modal'
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
        axios.get('http://localhost:3001/financa', {withCredentials: true})
              .then(res => {
                  this.setState(()=>{
                      return {listMetas : res.data}

                  })
              })
    }

    deleteMeta = (id)=>{
        axios.delete('http://localhost:3001/financa/delete/' + id, {withCredentials: true})
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
    addValue = async (id)=>{

        if(!this.state.values.value )
        {
            console.log("campo obrigatorio")
            return
        }
            
        let url = `http://localhost:3001/financa/${id}/addValue`;
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
                {this.state.modal ? <Modal f_modal={this.modal} 
                                           show={this.state.modal}
                                           f_addValue={this.addValue}
                                           f_changeValue={this.changeValue}
                                           f_changeDesc={this.changeDesc}
                                           meta={this.state.listMetas[this.state.editMetasIndex]}/> : null}
                <div className="container pd-40-top metas">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="metasflex">
                                {this.state.listMetas && this.state.listMetas.length > 0 ? this.printMetas(this.state.listMetas) : <h2>Nenhuma meta</h2>}
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