/*
 * PageName: 页面
 * Version: v1.0.
 * Autor: 张胜
 * Date: 2020-04-07 16:17:54
 * LastEditTime: 2020-04-09 11:29:36
 * Description: 
 */

import React from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const Login=()=>{
  return (
    <div id='login-page'>
          <div>
            <div className='container'>
              <LoginForm/>
            </div>
          </div>
    </div>
  )
}

export default Login