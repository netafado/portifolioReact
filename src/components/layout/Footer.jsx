import React from 'react'
const Footer = (props)=>{
    return(
        <footer>
            <div className="container text-left">
                <div className="col-sm-6 redes">
                    <a href="/">
                        <img src="/img/facebook.svg" alt="Facebook" />
                    </a>
                    <a href="/">
                        <img src="/img/whatsapp.svg" alt="Facebook"/>
                    </a>
                    <p>cel.: +55 11 98893 7856</p>
                </div>
                <div className="col-sm-6">
                    <img className="img-responsive ferra" src="/img/ferramentas.png" alt="Ferramentas" style={{float: right}}/>
                </div>           
            </div>
        </footer>
    )
}

export default Footer 