/*
 * PageName: 页面
 * Version: v1.0.
 * Autor: 张胜
 * Date: 2020-04-07 16:17:54
 * LastEditTime: 2020-04-08 14:25:14
 * Description: 
 */

import React from 'react'
//import BGParticle from '../../utils/BGParticle'
import { notification } from 'antd'
//import './style.css'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'





const Login=()=>{
  return (
    <div id='login-page'>
          <div>

            <div className='container'>
              <LoginForm/>
              <RegisterForm/>
            </div>
          </div>
    </div>
  )
}

const styles = {
  backgroundBox: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    // backgroundImage: 'url(https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/bg5.jpg?raw=true)',
    backgroundImage: 'url(https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/bg1.jpg?raw=true)',
    backgroundSize: '100% 100%',
    transition:'all .5s'
  },
  focus: {
    // transform: 'scale(0.7)',
    width: '20px',
    opacity: 1
  },
  loadingBox:{
    position:'fixed',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)'
  },
  loadingTitle:{
    position:'fixed',
    top:'50%',
    left:'50%',
    marginLeft: -45,
    marginTop: -18,
    color:'#000',
    fontWeight:500,
    fontSize:24
  },
}

export default Login