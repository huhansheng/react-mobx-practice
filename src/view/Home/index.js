import React from 'react';
import { observer, inject } from 'mobx-react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Menu from '../../component/Menu';
import TabBar from '../../component/TabBar';
import ButtonGroup from '../../component/ButtonGroup';
import { buttonList, tabBarItems, navList } from './user.config';
import _style from './index.scss';

@inject(state => ({home: state.store.home}))
@observer
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  onChangeThene = () => {
    this.props.home.changeTheme();
  }

  render() {
    return (
      <div className={_style.container}>
        <div className={_style.containerNav}>
          <AppBar
            style={appBarSty}
            title="react + mobx"
            iconElementLeft={<IconButton onClick={this.onChangeThene} label="change dark theme" />}
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

export default Home;