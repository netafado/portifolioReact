import React, { Component } from 'react';
import Layout from '../components/layout/index';
import AnimationPage from '../components/animation/PageAnimation';
import CaraSVG from '../imports/caraSVG'
import {Link} from 'react-router-dom';
import './about.css'


class About extends Component {
    state = {
        cursos: null
    }

    render(){
        console.log(this.state);
        return(
            <Layout>
                <AnimationPage animationName="page" type="fade" >
                    <div className="about-page container">
                        <div className="col-sm-4 caraContainer">
                            <CaraSVG/>
                        </div>
                        <h1>Isaias Francsico dos Santos</h1>
                        <h3>Designer | front-end | Brincando com o back-end </h3>
                        <p className="pd-40-top">Gosto de participar de projetos de projetos onde o cliente quer mais do que website, e sim uma ferramenta que agregue ao seu negócio, alguma coisa que vá além e que realmente sinta orgulho em participar. </p>
                        <p>Um pouco sobre mim, minha primeira experiência profissional trabalhei como designer gráfico e web (html, css e js), já no segundo emprego senti a necessidade de um CMS e aprendi um pouco de PHP e escolhi o wordpress como a ferramenta oficial para o back-end por ser bastante popular, e ferramentas para automação como o gulp e pré-precessador css como o stylus e Sass.</p>
                        <p>Além disso tenho conhecimento em Node.js, React (Aonde esse site foi desenvolvido),gulp, stylus, bootstrap...etc</p>
                        <p>Se quiser saber mais sobre meu trabalho visite meu <Link to="/portifolio">portifolio</Link></p>
                    </div>
                </AnimationPage>
            </Layout>
        )
    }
}

export default About