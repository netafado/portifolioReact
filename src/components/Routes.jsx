import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import About from './about'
import Blog from './blog/Blog'
import Contato from './Contato'
import HowIdo from './howIdo'
import AdminPage from '../containers/admin'
import Profile from '../components/admin/Profile'

import Auth from '../hoc/auth'


import Home from './home/index'

const Routes = (props)=>(
    <BrowserRouter >
        <div className="total">
            <Route path="/" component={Auth(Home)} exact/>
            <Route path="/about" render={()=>(<About />)}/>
            <Route path="/blog" render={()=>(<Blog />)}/>
            <Route path="/contato" render={()=>(<Contato/>)}/>
            <Route path="/comofaco" render={()=>(<HowIdo/>)}/>
            <Route path="/admin" render={()=>(<AdminPage/>) } exact/>
            <Route path="/profile" render={(props)=>(<Profile/>) } exact/>

        </div>        
    </BrowserRouter >
)


export default Routes;