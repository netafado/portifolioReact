import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Home from './home/index'

const Routes = (props)=>(
    <BrowserRouter >
        <Route path="/" component={Home}/>
    </BrowserRouter >
)


export default Routes;