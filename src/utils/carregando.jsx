import React from 'react'
import './loader.css'
const Loader = (props)=>{
    return(
        props.carregando ? 
        <div id="loader">
            <img className="img-loader" src="/img/loader.gif" style={{maxWidth: "30px"}} alt="Carregando"/>
        </div>
        : null
    )
}
export default Loader;