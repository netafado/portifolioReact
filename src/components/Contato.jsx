import React from 'react'
import Layout from './layout/index'
import PageAnimation from './animation/PageAnimation'

const Contato = props => 
    <Layout>
        <PageAnimation type="fade">
            <div className="container">
                <h1>Contato</h1>
            </div>
        </PageAnimation>
    </Layout>

export default Contato
