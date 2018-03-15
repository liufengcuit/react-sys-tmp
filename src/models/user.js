export default {
	namespace: 'user',
	state:{
		loginUser:{
			user: 'admin',
			password: '123456',
			id: 1
		}
	},
	reducers: {
		login(state){
			console.log(state)
			// if(state.user == )
		}
	}
}