import { observable, action, computed, autorun } from 'mobx';
import userService from '../service/user';

class User {
	@observable userName = 'hhs';
	@observable list;
	@observable user;

	constructor() {
        autorun(() => {
        	console.log('user change',this.user, this.list, this.userName);
		});
	}

	@computed get userNameLength() {
		return this.userName.length;
	}

	@action.bound async setUserName(obj) {
        let response = await userService.submitUserInfo(obj);
        let data = await response.json();
        this.userName = obj.name;
        console.log(data, "request data callback");
	}

	@action.bound setList(list) {
		this.list = list;
	}

	@action.bound async getUserInfo(params) {
		let response = await userService.getUserInfo(params);
		let data = await response.json();
		this.user = data.result;
		console.log(data, "request data callback");
	}

}

export default new User();