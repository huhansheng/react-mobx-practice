import { observable, action, computed, autorun } from 'mobx';
import userService from '../service/user';

const USER_INFO_LOAD = 'USER.USER_INFO_LOAD';
const USER_INFO_SUC = 'USER.USER_INFO_SUC';
const USER_INFO_ERR = 'USER.USER_INFO_ERR';

class User {
	@observable loading = false;
	@observable userName = 'hhs';
	@observable list;
	@observable user;

	constructor() {
     autorun(() => {
        console.log('user change',this.loading, this.user, this.list, this.userName);
	  });
	}

	@computed get userNameLength() {
		return this.userName.length;
	}

	@action.bound next(type, action) {
		switch (type) {
			case USER_INFO_LOAD:
				this.loading = true;
				break;
			case USER_INFO_SUC:
				this.loading = true;
				break;
			case USER_INFO_ERR:
				this.loading = true;
				break;
		}
	}
}


export default new User();

