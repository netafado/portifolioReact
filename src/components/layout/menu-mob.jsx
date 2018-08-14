import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuMob = (props)=>{
    return(
        <div  id="menu-mob"> 
            <div id="open-menu" onClick={props.abrirMenu}>
                    <span>___</span>
                    <span>___</span>
                    <span>___</span>
            </div>
            <div className="logotipo">
                <NavLink to="/">
                    <img className="logotipo" src="https://firebasestorage.googleapis.com/v0/b/portifolio-46207.appspot.com/o/logo.svg?alt=media&token=9ef143b9-580e-4a9e-8bd9-17bb291f5be7" alt="Logotipo"/>
                </NavLink>
            </div>

        </div>
    )
}

export default MenuMob