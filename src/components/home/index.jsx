import React from 'react'
import Layout from '../layout/index'
import About from './about'
import Works from './Works'
import AnimationPage from '../animation/PageAnimation'
import ScreenSize from '../../utils/screenSize'
import './style.css'
const Home = props => (
    <Layout active={props.active}>
        <AnimationPage type="fade">
            <ScreenSize classes="flex-center">
                <div className="home" id="home">
                    <About /> 
                    <Works />
                </div>
            </ScreenSize>
        </AnimationPage>
    </Layout>
)

export default Home