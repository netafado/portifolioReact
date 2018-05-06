import React from 'react'
import Layout from '../components/layout/index'
import AnimationPage from '../components/animation/PageAnimation'


const About = (props) =>{
    return(
        <Layout>
            <AnimationPage animationName="page" type="slide" >
                <div className="about-page container">
                    <h1>Sobre</h1>
                </div>
            </AnimationPage>
        </Layout>
    )
}

export default About