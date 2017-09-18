import React from 'react';
import { inject, observer } from "mobx-react";
import _style from './index.css';
import AppBar from 'material-ui/AppBar';
import Menu from '../../component/Menu'
import TabBar from '../../component/TabBar'
import ButtonGroup from '../../component/ButtonGroup'
import { buttonList, tabBarItems, navList } from './user.config';

const appBarSty = {
	background: '#FF4081'
};

@inject(state => ({ user: state.store.User }))
@observer
class User extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.user.getUserInfo();
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
        this.props.user.setUserName({ name: 'handsome' });
	}

	toShow() {

	}

	toInterest() {

	}


	render() {
		return (
			<div className={_style.container}>
				<div className={_style.containerNav}>
					<AppBar
						style={appBarSty}
						title="react + mobx"
						iconElementRight={<Menu menuItemList={navList} />}
					/>
				</div>

				<div className={_style.containerContent}>
					<ButtonGroup itemList={buttonList} onClick={this.onClickBtn.bind(this)} />
				</div>

				<div className={_style.footer}>
					<TabBar defaultSelectedIndex={1} itemList={tabBarItems} />
				</div>
			</div>
		)
	}
}



export default User;