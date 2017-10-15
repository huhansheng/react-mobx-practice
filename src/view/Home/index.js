import React from 'react';
import { observer, inject } from 'mobx-react';
import AppBar from 'material-ui/AppBar';
import Menu from '../../component/Menu';
import TabBar from '../../component/TabBar';
import ButtonGroup from '../../component/ButtonGroup';
import { buttonList, tabBarItems, navList } from './home.config';
import _style from './index.css';

@inject(state => ({home: state.store.home}))
@observer
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  onChangeThene = () => {
    this.props.home.changeTheme('blue');
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
    console.log(pathname);
    this.props.router.push(pathname);
  }

  render() {
    console.log(this.props);
    return (
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
      </div>
    )
  }
}

export default Home;