/*
 * PageName: 页面
 * Version: v1.0.
 * Autor: 张胜
 * Date: 2020-04-02 16:50:20
 * LastEditTime: 2020-04-07 16:28:59
 * Description: 
 */
import React,{ useState  } from "react"
import {Route,Switch,withRouter} from 'react-router-dom'
import Login from './routes/Login/index'
function App() {
    return (
      <Switch>
        <Route path='/login' component={Login}/>
      </Switch>
    )
}

export default withRouter(App)