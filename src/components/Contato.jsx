import React from 'react'
import Layout from './layout/index'
import PageAnimation from './animation/PageAnimation'
import './style.css'

const Contato = props => 
    <Layout>
        <PageAnimation type="fade">
            <div className="container">
                <h1>Contato</h1>
                <div className="row">
                    <div className="col-sm-6">
                        <p className="pd-40-top">cel.: +55 11 98893 7856</p>
                        <p>email.: contato@isaiasfrancisco.com.br</p>
                    </div>
                    <div className="col-sm-6">
                   
                        <div className="form-group clearfix">
                            <div className="col-md-12">
                                <input id="name" name="name" type="text" placeholder="Seu nome" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group clearfix">
                            <div className="col-md-12">
                                <input id="email" name="email" type="text" placeholder="seu email" className="form-control"/>
                            </div>
                        </div>
                
                        <div className="form-group clearfix">
                            <div className="col-md-12">
                                <textarea className="form-control" id="message" name="message" placeholder="Digite sua mensagem..." rows="5"></textarea>
                            </div>
                        </div>
                
                        <div className="form-group clearfix">
                            <div className="col-md-12 ">
                                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageAnimation>
    </Layout>

export default Contato
