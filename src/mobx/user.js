import { observable, action, computed, autorun } from 'mobx';
import http from '../api/http';
import { GET_USER_INFO_URL } from '../api/constants';

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

	@action.bound async requestUserInfo() {
		try {
			this.loader = true;
			const data = await http.get(GET_USER_INFO_URL);
			this.loader = false;
			if(data.error) {
				this.msg = data.message;
				return;
			}
			this.user = data.result;
		} catch(e) {
			this.loader = false;
			this.msg = '服务出错';
		}
	}

	@action.bound onGetUser(params) {
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

