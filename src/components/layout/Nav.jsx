import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

const Nav = (props)=>(
    <nav>
        <ul className="menu-flex"> 
            <li><NavLink to="/contato">Contato</NavLink></li>
            <li><NavLink to="/about">Sobre</NavLink></li>
            <li className="logotipo">
                <NavLink to="/">
                    <img className="logotipo" src="https://firebasestorage.googleapis.com/v0/b/portifolio-46207.appspot.com/o/logo.svg?alt=media&token=9ef143b9-580e-4a9e-8bd9-17bb291f5be7" alt="Logotipo"/>
                </NavLink>
            </li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/comofaco">Como faço</NavLink></li>
        </ul>
    </nav>
)


export default Nav