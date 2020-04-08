/*
 * PageName: 页面
 * Version: v1.0.
 * Autor: 张胜
 * Date: 2020-04-02 16:50:20
 * LastEditTime: 2020-04-08 12:01:33
 * Description: 
 */
import React,{ useState  } from "react"
import {Route,Switch,withRouter} from 'react-router-dom'
import Login from './routes/Login/index'
function App() {
  console.log('ddd')
    return (
      <Switch>
        <Route path='/' component={Login}/>
      </Switch>
    )
}

export default withRouter(App)