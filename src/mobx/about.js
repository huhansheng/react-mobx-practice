import { observable, action, compute, autorun } from 'mobx';

class About {
	@observable loader = false;

	constructor() {

	}

}

export default new About();