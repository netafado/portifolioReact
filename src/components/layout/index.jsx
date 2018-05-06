import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
const Layout = (props)=>{
    return(
        <div className="app">
        <div className="wrapper-total">
            <header>
                <div className="container">
                    <Nav />
                </div>
            </header>

            {props.children}               
       
        </div>
        <Footer />
    </div>       
    )
}

export default Layout