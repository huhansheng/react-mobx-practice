import React from 'react';
import { inject, observer } from "mobx-react";
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ActionBook from 'material-ui/svg-icons/action/book';
import ActionPicture from 'material-ui/svg-icons/action/picture-in-picture';
import {blue500, yellow600} from 'material-ui/styles/colors';
import _style from './index.css';

const appBarSty = {
	background: '#FF4081'
};

@inject(state => ({ user: state.store.user }))
@observer
class User extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			expanded: true,

		}
	}

	componentDidMount() {
		this.props.user.requestUserInfo();
	}

	handleExpandChange=(expanded) => {
		this.setState({ expanded });
	}



	render() {
		return (
			<div>
				<Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
					<CardHeader
						title="handsome"
						subtitle="huhansheng"
						avatar="/common/img/handsome.jpg"
						actAsExpander={true}
						showExpandableButton={true}
					/>
					<CardTitle
						title="about me"
						subtitle="realize me more"
					/>
					<CardText>
						my is huhansheng,my friends called me as handsome...
					</CardText>
					<CardText expandable={true}>
						<List>
							<Subheader>know me more</Subheader>
							<ListItem
								primaryText="photo"
								secondaryText="Jan 10, 2014"
								leftAvatar={<Avatar icon={<ActionPicture />} backgroundColor={blue500} />}
							/>
							<Divider inset={true} />
							<Subheader>my interest</Subheader>
							<ListItem
								primaryText="book"
								secondaryText="Jan 10, 2014"
								leftAvatar={<Avatar icon={<ActionBook />} backgroundColor={blue500} />}
							/>
							<ListItem
								primaryText="sport"
								secondaryText="Jan 10, 2014"
								leftAvatar={<Avatar icon={<ActionBook />} backgroundColor={blue500} />}
							/>
							<ListItem
							primaryText="sport"
							secondaryText="Jan 10, 2014"
							leftAvatar={<Avatar icon={<ActionBook />} backgroundColor={blue500} />}
						/>
						</List>
					</CardText>
				</Card>
			</div>
		)
	}
}

export default User;