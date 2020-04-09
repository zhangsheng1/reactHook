/*
 * PageName: 页面
 * Version: v1.0.
 * Autor: 张胜
 * Date: 2020-04-02 16:50:20
 * LastEditTime: 2020-04-09 16:44:14
 * Description: 
 */
import React,{ useState  } from "react"
import {Route,Switch,withRouter} from 'react-router-dom'
import Login from './routes/Login/index'
import Index from './routes/Index/index'
import './App.css'
function App() {
  console.log('ddd')
    return (
      <Switch>
        <Route  path='/' component={Index}/>
        <Route  path='/home' component={Login}/>
      </Switch>
    )
}

export default withRouter(App)