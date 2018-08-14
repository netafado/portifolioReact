import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types'
import './style.css'

const MenuMob = (props)=>{
    var _name = props.showMenu ? "ficar" : "sair";
    return(
        <div  id="menu-mob-fload" className={_name}> 
            <div onClick={props.fecharMenu} className="fecharMenu">
                x
            </div>
            <ul  onClick={props.fecharMenu}>
                <li><NavLink to="/contato">Contato</NavLink></li>
                <li><NavLink to="/about">Sobre</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/portifolio">Portifolio</NavLink></li>
            </ul>
        </div>
    )
}

MenuMob.propTypes = {
    showMenu: propTypes.bool
}

export default MenuMob