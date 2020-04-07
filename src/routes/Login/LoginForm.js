/*
 * PageName: 页面
 * Version: v1.0.
 * Autor: 张胜
 * Date: 2020-04-07 16:33:00
 * LastEditTime: 2020-04-07 16:43:21
 * Description: 
 */
import React from 'react'
import { Form, Input, Row, Col } from 'antd'


class LoginForm extends React.Component {
  state = {
    focusItem: -1,   //保存当前聚焦的input
    code: ''         //验证码
  }

  loginSubmit = (e) => {
    e.preventDefault()
    this.setState({
      focusItem: -1
    })
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 表单登录时，若验证码长度小于4则不会验证，所以我们这里要手动验证一次，线上的未修复
        if (this.state.code.toUpperCase() !== values.verification.toUpperCase()) {
          this.props.form.setFields({
            verification: {
              value: values.verification,
              errors: [new Error('验证码错误')]
            }
          })
          return
        }

        const users = this.props.appStore.users
        // 检测用户名是否存在
        const result = users.find(item => item.username === values.username)
        if (!result) {
          this.props.form.setFields({
            username: {
              value: values.username,
              errors: [new Error('用户名不存在')]
            }
          })
          return
        } else {
          //检测密码是否错误
          if (result.password !== values.password) {
            this.props.form.setFields({
              password: {
                value: values.password,
                errors: [new Error('密码错误')]
              }
            })
            return
          }
        }

        this.props.appStore.toggleLogin(true, {username: values.username})

        const {from} = this.props.location.state || {from: {pathname: '/'}}
        this.props.history.push(from)
      }
    })
  }
  register = () => {
    this.props.switchShowBox('register')
    setTimeout(() => this.props.form.resetFields(), 500)
  }

  render () {
    const {getFieldDecorator, getFieldError} = this.props.form
    const {focusItem, code} = this.state
    return (
      <div className={this.props.className}>
        <h3 className='title'>管理员登录</h3>
        <Form onSubmit={this.loginSubmit}>
          <Form.Item >
            {getFieldDecorator('username', {
              rules: [{required: true, message: '请输入用户名'}]
            })(
              <Input
                onFocus={() => this.setState({focusItem: 0})}
                onBlur={() => this.setState({focusItem: -1})}
                maxLength={16}
                placeholder='用户名'
                addonBefore={<span className='iconfont icon-User' style={focusItem === 0 ? styles.focus : {}}/>}/>
            )}
          </Form.Item>
          <Form.Item >
            {getFieldDecorator('password', {
              rules: [{required: true, message: '请输入密码'}]
            })(
              <Input
                onFocus={() => this.setState({focusItem: 1})}
                onBlur={() => this.setState({focusItem: -1})}
                type='password'
                maxLength={16}
                placeholder='密码'
                addonBefore={<span className='iconfont icon-suo1' style={focusItem === 1 ? styles.focus : {}}/>}/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('verification', {
              validateFirst: true,
              rules: [
                {required: true, message: '请输入验证码'},
                {
                  validator: (rule, value, callback) => {
                    if (value.length >= 4 && code.toUpperCase() !== value.toUpperCase()) {
                      callback('验证码错误')
                    }
                    callback()
                  }
                }
              ]
            })(
              <Row>
                <Col span={15}>
                  <Input
                    onFocus={() => this.setState({focusItem: 2})}
                    onBlur={() => this.setState({focusItem: -1})}
                    maxLength={4}
                    placeholder='验证码'
                    addonBefore={<span className='iconfont icon-securityCode-b'
                                       style={focusItem === 2 ? styles.focus : {}}/>}/>
                </Col>
                <Col span={9}>
                  <canvas onClick={this.createCode} width="80" height='39' ref={el => this.canvas = el}/>
                </Col>
              </Row>
            )}
          </Form.Item>
          <div className='bottom'>
            <input className='loginBtn' type="submit" value='登录'/>
            <span className='registerBtn' onClick={this.register}>注册</span>
          </div>
        </Form>
        <div className='footer'>
          <div>欢迎登陆后台管理系统</div>
        </div>
      </div>
    )
  }
}

const styles = {
  focus: {
    width: '20px',
    opacity: 1
  },
}

export default Form.create()(LoginForm)