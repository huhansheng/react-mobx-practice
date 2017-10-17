import React from 'react';
import { observer, inject } from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Menu from '../../component/Menu';
import TabBar from '../../component/TabBar';
import ButtonGroup from '../../component/ButtonGroup';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem'
import { buttonList, tabBarItems, navList } from './home.config';
import _style from './index.css';

@inject(state => ({home: state.store.home}))
@observer
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  onChangeThene = (open) => {
    this.setState({ open: true });
  }

  onClickBtn(action) {
    switch(action) {
    case 'introduce':
      this.onChangeThene();
      break;
    case '':
      break;
    }
  }

  onSelectTheme(theme) {
    this.props.home.changeTheme(theme);
  }

  onJump(pathname) {
    this.props.router.push(pathname);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(this.props.home.theme)}>
      
      <div className={_style.container}>
        <div className={_style.containerNav}>
          <AppBar
            title="react + mobx"
            onLeftIconButtonTouchTap={this.onChangeThene}
            iconElementRight={<Menu onClick={this.onSelectTheme.bind(this)} menuItemList={navList} />}
          />
        </div>

        <div className={_style.containerContent}>
          { this.props.children }
        </div>

        <div className={_style.footer}>
          <TabBar defaultSelectedIndex={0} itemList={tabBarItems} onClick={this.onJump.bind(this)} />
        </div>

        <Drawer
          width={100}
          docked={false}  
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
      </MuiThemeProvider>
    )
  }
}

export default Home;