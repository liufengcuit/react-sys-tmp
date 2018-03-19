import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './login.css'
import fetch from 'dva/fetch';
import { Form, Icon, Input, Button, Checkbox, Row, Col, message } from 'antd';

import Api from '../../utils/request'
import query from '../../api/index'
const FormItem = Form.Item;

class LoginForm extends Component{
	constructor(props){
		super(props)
		this.state = {captchaImg: `http://192.168.2.106:8080/captcha?length=4&${Math.random()}`}
		this.refreshCaptcha = this.refreshCaptcha.bind(this)
	}
	handleSubmit = (e) => {
	    e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				query.User.login(values, result => {
					console.log(result)
				}, error => {
					this.props.dispatch(routerRedux.push('/home'));
					this.refreshCaptcha()

				})
				// console.log(this.props)
				// console.log(values)
				if(true){
					// this.state.dispatch(routerRedux.push('/count'));
				}else{
					message.error('用户名或密码错误！');
				}
			}
		});
	}
	refreshCaptcha(){
		console.log("执行")
		let captchaUrl = `http://192.168.2.106:8080/captcha?length=4&${Math.random()}`
		console.log(captchaUrl)
		this.setState({captchaImg: captchaUrl})
	}
	render() {
	    const { getFieldDecorator } = this.props.form;
	    return (
	    	<div className={styles.backgroundImage}>
	    		<div className={styles.loginBox}>
					<Form onSubmit={this.handleSubmit} className="login-form">
						<FormItem className={styles.msTitle}>
							TPP
						</FormItem>
						<FormItem className={styles.antFormItem}>
							{getFieldDecorator('userName', {
							rules: [{ required: true, message: '请输入用户名' }],
							})(
							<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
							)}
						</FormItem>
						<FormItem className={styles.antFormItem}>
							{getFieldDecorator('password', {
							rules: [{ required: true, message: '请输入密码' }],
							})(
							<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
							)}
						</FormItem>
						<FormItem className={styles.antFormItem}>
							<Row>
								<Col span={16}>
									{getFieldDecorator('captcha', {
									rules: [{ required: true, message: '请输入验证码' }],
									})(
									<Input className={styles.borderRightClear} prefix={<Icon type="area-chart" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="验证码" />
									)}
								</Col>
								<Col span={8} className={styles.borderRight}><img src={this.state.captchaImg} className={styles.codeImg} alt="图片" onClick={this.refreshCaptcha}/></Col>
							</Row>
						</FormItem>
						<FormItem>
							{getFieldDecorator('rememberMe', {
							valuePropName: 'checked',
							initialValue: true,
							})(
							<Checkbox>记住我</Checkbox>
							)}
						</FormItem>
						<FormItem>
							<Button type="primary" htmlType="submit" className="login-form-button" style={{width : '100%',height: '39px'}}>
							登录
							</Button>
						</FormItem>
					</Form>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		state : state.user
	}
}

const LoginForms = connect(mapStateToProps)(Form.create()(LoginForm))

export default LoginForms