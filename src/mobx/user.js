import { observable, action, computed, autorun } from 'mobx';
import userService from '../service/user';

class User {
	@observable loader = false;
	@observable user;
	@observable msg;

	constructor() {
    autorun(() => {
    	console.log('user change',this.loader, this.user);
	  });
	}

	@computed get userNameLength() {
		return this.userName.length;
	}

	@action.bound  onGetUser(params) {
		this.loader = true;
		fetch(url, params)
		.then((res) => {
			if(!res.json().error) {
				this.loader = false;
				this.user = res.json().result;
			}else {
				this.loader = false;
				this.msg = 'error';
			}
		});
	}
}

export default new User();

