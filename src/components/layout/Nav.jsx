import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import MenuMobControl from './menu-mob';
import FloatMenu from './menuMobFloat';
import {connect} from 'react-redux';
import {navMob} from '../../actions'
import './style.css'

class Nav extends Component{
    abrir(){
        this.props.dispatch(navMob(true))
    }
    fechar(){
        this.props.dispatch(navMob(false))
    }
    render(){  
        return(
            <nav>
                <ul className="menu-flex" id="menu-desk"> 
                    <li><NavLink to="/contato">Contato</NavLink></li>
                    <li><NavLink to="/about">Sobre</NavLink></li>
                    <li className="logotipo">
                        <NavLink to="/">
                            <img className="logotipo" src="/img/logo.svg" alt="Logotipo"/>
                        </NavLink>
                    </li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/portifolio">Portifolio</NavLink></li>
                </ul>
                <MenuMobControl abrirMenu={this.abrir.bind(this)} />
                <FloatMenu showMenu={this.props.navMob} fecharMenu={this.fechar.bind(this)}/>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return{
        navMob: state.navMob.navMob
    }
}

export default connect(mapStateToProps, null)(Nav) 