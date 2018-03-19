import http from '../../utils/request'

export default {
	/*登录*/
	login(params, success, fail){
		http.postBody('user/login', params, success, fail);
	},
	/*获取验证码*/
	getCaptcha(success, fail) {
		http.request('/captcha?length=4&'+Math.random(), )
	}
}