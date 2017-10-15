import React, { propTypes } from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

class TabBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: this.props.defaultSelectedIndex || 0
    };
  }

  onSelectBar(selectedIndex, value) {
    if (this.props.onClick) {
      this.props.onClick(value);
    }
    this.setState({ selectedIndex });
  }

  createNavItemList() {
    const itemList = this.props.itemList || [];

    const list = itemList.map((item, index) => {
      const { id, label, value, icon } = item;

      return (
        <BottomNavigationItem
          key={id}
          label={label}
          icon={icon}
          onClick={this.onSelectBar.bind(this, id, value)}
        />
      );
    });

    return list;
  }

  render() {
    return (
      <Paper>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          { this.createNavItemList() }
        </BottomNavigation>
      </Paper>
    );
  }
}


export default TabBar;
