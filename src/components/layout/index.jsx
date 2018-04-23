import React from 'react'
import Nav from './Nav'
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
        <footer>
            <div className="container">
                <div className="col-xs-12 redes">
                    <a href="/">
                        <img src="img/facebook.svg" alt="Facebook" />
                    </a>
                    <a href="/">
                        <img src="img/whatsapp.svg" alt="Facebook"/>
                    </a>
                    <p>cel.: +55 11 98893 7856</p>
                </div>            
            </div>
        </footer>
    </div>       
    )
}

export default Layout