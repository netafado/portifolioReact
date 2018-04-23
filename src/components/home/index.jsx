import React from 'react'
import Layout from '../layout/index'
import About from './about'
import Works from './Works'
const Home = props => (
    <Layout>
       <About /> 
        <Works />
    </Layout>
)

export default Home