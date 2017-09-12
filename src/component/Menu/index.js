import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const selectedSty = {
    color: '#2196F3'
};

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };
    }

    onChangeItem(value) {
        this.setState({ value });
    }

    createMenuItem() {
        const menuItemList = this.props.menuItemList;

        const list = menuItemList.map((item) => {
            const { label, value } = item;

            return (
                <MenuItem key={value} value={value} primaryText={label} />
            );
        });

        return list;
    }

    render() {
        const menuItemList = this.createMenuItem();

        return (
            <IconMenu
                onChange={this.onChangeItem.bind(this)}
                value={this.state.value}
                selectedMenuItemStyle={selectedSty}
                iconButtonElement={
                    <IconButton><MoreVertIcon color="#fff" /></IconButton>
			    }
            >
                { menuItemList }
            </IconMenu>
        );
    }
}

export default Menu;
