import { observable, action } from 'mobx';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

class Home {
  @observable theme = lightBaseTheme;

  @action changeTheme(theme) {
    this.theme = theme === 'light' ? lightBaseTheme : darkBaseTheme;
  }
}

export default new Home();