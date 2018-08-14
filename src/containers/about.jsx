import React, { Component } from 'react';
import Layout from '../components/layout/index';
import AnimationPage from '../components/animation/PageAnimation';
import { connect } from 'react-redux';
import axios from 'axios';

class About extends Component {
    state = {
        cursos: null
    }
    changeState(data){
        let lists = data.filter(list =>{
            if(list.name.indexOf("JavaScript") > 0 
            || list.name.indexOf("Wordpress") > 0 
            || list.name.indexOf("React") > 0  
            || list.name.indexOf("Gulp") > 0 
            || list.name.indexOf("Sass") > 0  
            || list.name.indexOf("WordPress") > 0 
            || list.name.indexOf("WordPress") > 0
            || list.name.indexOf("CSS") > 0)
            {
                return true
            } 
        })
        console.log(lists);
        this.setState({
            cursos: lists
        })
    }
    componentWillMount(){
        const url = 'https://teamtreehouse.com/isaiasfranciscodossantos.json';
        let res = axios.get(url)
                        .then((res)=>{
                            this.changeState(res.data.badges);
                            console.log(res.data.badges);
                            return;

                        })  
                        .catch(err => console.log('um erro ocorreu'));

        
    }
    render(){
        console.log(this.state);
        return(
            <Layout>
                <AnimationPage animationName="page" type="slide" >
                    <div className="about-page container">
                        <h1>Sobre</h1>
                        <h3>Cursos</h3>
                        {this.state.cursos ? 

                        this.state.cursos.map((item, i)=> {
                            return(
                            <div className="col-sm-1" key={i}>

                                <img className="img-responsive" src={item.icon_url} />
                            </div>)
                        })
                        : 
                        
                        null }
                    </div>
                </AnimationPage>
            </Layout>
        )
    }
}

export default connect(null, null)(About)