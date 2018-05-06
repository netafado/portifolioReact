import React from 'react'
import Layout from './layout/index'
import PageAnimation from './animation/PageAnimation'

const HowIdo = props => 
    <Layout>
        <PageAnimation type="fade">
            <div className="container">
                <h1>Como eu faço</h1>
            </div>
        </PageAnimation>
    </Layout>

export default HowIdo
