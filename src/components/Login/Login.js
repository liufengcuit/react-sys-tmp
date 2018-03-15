import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './login.css'
import { Form, Icon, Input, Button, Checkbox, Row, Col, message } from 'antd';
const FormItem = Form.Item;

class LoginForm extends Component{
	constructor(props){
		super(props)
		this.state = props;
	}
	handleSubmit = (e) => {
	    e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log(this.state)
				if(this.state.state.loginUser.user === values.userName && this.state.state.loginUser.password === values.password){
					this.state.dispatch(routerRedux.push('/count'));
				}else{
					message.error('用户名或密码错误！');
				}
			}
		});
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
									<Input className={styles.borderRightClear} prefix={<Icon type="area-chart" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="验证码" />
									</Col>
								<Col span={8} className={styles.borderRight}><img src="http://120.78.188.227/captcha.jpg" className={styles.codeImg} alt="图片"/></Col>
							</Row>
						</FormItem>
						<FormItem>
							{getFieldDecorator('remember', {
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