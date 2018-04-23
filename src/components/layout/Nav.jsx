import React from 'react'
import {Link} from 'react-router-dom'
import PropsTypes from 'prop-types'

const Nav = (props)=>(
    <nav>
        <ul className="menu-flex"> 
            <li><Link to="/">Contato</Link></li>
            <li><Link to="/">Contato</Link></li>
            <li className="logotipo"><Link to="/"><img className="logotipo" src="img/logo.svg" alt="Logotipo"/></Link></li>
            <li><Link to="/">Contato</Link></li>
            <li><Link to="/">Contato</Link></li>
        </ul>
    </nav>
)


export default Nav