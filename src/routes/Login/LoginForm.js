/*
 * PageName: 页面
 * Version: v1.0.
 * Autor: 张胜
 * Date: 2020-04-07 16:33:00
 * LastEditTime: 2020-04-08 18:02:13
 * Description: 
 */

import React, {useState, useMemo, useEffect} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginForm=()=>{
  const canvasRef = React.createRef()
  const [form]=Form.useForm()
  console.log('dddd',form)
  // useEffect(() => {
  //   const ctx = canvasRef.current.getContext('2d')
  //   const chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  //   let code = ''
  //   ctx.clearRect(0, 0, 80, 39)
  //   for (let i = 0; i < 4; i++) {
  //     const char = chars[randomNum(0, 57)]
  //     code += char
  //     ctx.font = randomNum(20, 25) + 'px SimHei'  //设置字体随机大小
  //     ctx.fillStyle = '#D3D7F7'
  //     ctx.textBaseline = 'middle'
  //     ctx.shadowOffsetX = randomNum(-3, 3)
  //     ctx.shadowOffsetY = randomNum(-3, 3)
  //     ctx.shadowBlur = randomNum(-3, 3)
  //     ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
  //     let x = 80 / 5 * (i + 1)
  //     let y = 39 / 2
  //     let deg = randomNum(-25, 25)
  //     /**设置旋转角度和坐标原点**/
  //     ctx.translate(x, y)
  //     ctx.rotate(deg * Math.PI / 180)
  //     ctx.fillText(char, 0, 0)
  //     /**恢复旋转角度和坐标原点**/
  //     ctx.rotate(-deg * Math.PI / 180)
  //     ctx.translate(-x, -y)
  //   }
  // });

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

    //return <canvas  width="80" height='39' ref={canvasRef}/>
    return <div>
             <h3 style={{textAlign:'center'}}>管理员注册</h3>
             <Form
              name="normal_login"
              style={{maxWidth: 300}}
              //initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a style={{float: 'right'}} href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                  Log in
                </Button>
                Or <a href="">register now!</a>
              </Form.Item>
            </Form>
           </div>
}
  




export default LoginForm