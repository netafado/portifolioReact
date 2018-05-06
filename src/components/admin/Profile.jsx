import React, { Component } from 'react'
import Layout from '../layout/index'
import AnimationPage from '../animation/PageAnimation'
import ScreenSize from '../../utils/screenSize'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './style.css'

import config from '../../config'

class Admin extends Component{
    state = {
        auth: false
    }
    
    render(){
        if(this.state.auth){
            return <Redirect to='/admin/profile' />
        }
        return (
            <Layout>
                <AnimationPage type="fade">
                    <div className="container">
                        <div className="col-sm-12">
                        
                                <form className="form-horizontal">
                                <fieldset>                    
                    
                                <div className="form-group">
                                    <label className="col-md-4 control-label" >title</label>  
                                    <div className="col-md-6">
                                        <input id="title" name="title" type="text" placeholder="Titulo" className="form-control input-md" required="" />
                                    </div>
                                </div>                        
                                <div className="form-group">
                                    <label className="col-md-4 control-label">Conteudo</label>
                                    <div className="col-md-4">                     
                                        <textarea className="form-control" id="content" name="content"></textarea>
                                    </div>
                                </div>    
                                <div className="form-group">
                                    <label className="col-md-4 control-label">Descrição</label>  
                                    <div className="col-md-6">
                                        <input id="desc" name="desc" type="text" placeholder="Descrição" className="form-control input-md"/>
                                        <span className="help-block">help</span>  
                                    </div>
                                </div>    
                                <div className="form-group">
                                    <label className="col-md-4 control-label">File Button</label>
                                    <div className="col-md-4">
                                        <input id="img" name="img" className="input-file" type="file"/>
                                    </div>
                                </div>
                            </fieldset>
                            </form> 

                        </div>
                    </div>                   
                </AnimationPage>
            </Layout>
        )        
    }
}

export default Admin;