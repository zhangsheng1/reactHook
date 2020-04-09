/*
 * PageName: 页面
 * Version: v1.0.
 * Autor: 张胜
 * Date: 2020-04-02 16:23:18
 * LastEditTime: 2020-04-09 17:55:13
 * Description: 
 */
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
ReactDom.render(
    <Router>
        <ConfigProvider locale={zh_CN}>
        <App />
        </ConfigProvider>
    </Router>,
    document.getElementById('root'))