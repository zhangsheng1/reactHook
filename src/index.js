/*
 * PageName: 页面
 * Version: v1.0.
 * Autor: 张胜
 * Date: 2020-04-02 16:23:18
 * LastEditTime: 2020-04-07 16:13:02
 * Description: 
 */
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'

ReactDom.render(
    <Router>
        <LocaleProvider locale={zh_CN}>
        <App />
        </LocaleProvider>
    </Router>,
    document.getElementById('root'))