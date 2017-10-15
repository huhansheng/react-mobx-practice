import React from 'react';
import { inject, observer } from "mobx-react";
import _style from './index.css';
import AppBar from 'material-ui/AppBar';
import Menu from '../../component/Menu'
import TabBar from '../../component/TabBar'
import ButtonGroup from '../../component/ButtonGroup'

const appBarSty = {
	background: '#FF4081'
};

@inject(state => ({ user: state.store.user }))
@observer
class User extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.user.requestUserInfo();
	}


	onClickBtn(action) {
		switch (action) {
			case 'introduce':
				this.toIntroduce();
				break;
			case 'show':
				this.toShow();
				break;
			case 'interest':
				this.toInterest();
				break;
			}
	}

	toIntroduce() {
  	// userService.submitUserInfo(this.props.user, { name: 'handsome' });
	}

	toShow() {

	}

	toInterest() {

	}

	render() {
		return (
			<div className={_style.container}>
				<span>hello, world</span>
			</div>
		)
	}
}

export default User;