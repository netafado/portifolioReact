import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import About from '../containers/about'
import Blog from '../containers/Blog'
import Contato from './Contato'
import HowIdo from './howIdo'
import AdminPage from '../containers/admin'
import Profile from '../components/admin/Profile'
import newPost from '../components/admin/newPost'
import Home from '../containers/home'
import BlogArtigo from '../containers/BlogArtigo'
import Auth from '../hoc/auth'
import UserPosts from '../containers/UserPosts'
import Portifolio from '../containers/Portifolio'
import userPOstEdit from '../components/admin/editPost'
import ListaMetas from '../containers/metas/Metas'
import Metas from '../containers/metas/criarMeta'


const Routes = (props)=>(
    <BrowserRouter >
        <div className="total">
            <Route path="/" component={Home} exact/>
            <Route path="/about" render={()=>(<About />)}/>
            <Route path="/blog" render={()=>(<Blog />)}/>
            <Route path="/contato" render={()=>(<Contato/>)}/>
            <Route path="/comofaco" render={()=>(<HowIdo/>)}/>
            <Route path="/admin" render={()=>(<AdminPage/>) } exact/>
            <Route path="/profile"component={Auth(Profile)} exact/>
            <Route path="/user/post" component={Auth(newPost)} exact/>
            <Route path="/portifolio" render={()=>(<Portifolio/>) } exact/>
            <Route path="/post/:id" component={BlogArtigo} exact/>
            <Route path='/user/posts/:id' component={Auth(UserPosts)} exact />
            <Route path='/user/post/edit/:id' component={Auth(userPOstEdit)} exact />
            <Route path="/financas" component={Auth(ListaMetas)} exact />
            <Route path="/financas/create" component={Auth(Metas)} exact />
        </div>        
    </BrowserRouter >
)
export default Routes;