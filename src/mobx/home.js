import { observable, action, autorun } from 'mobx';
import { lightBaseTheme, darkTheme, pinkTheme } from '../component/Theme';

class Home {
  @observable theme = lightBaseTheme;

  constructor() {
    autorun(() => {
      console.log("change theme", this.theme);
    });
  }
  @action.bound changeTheme(theme) {
    switch(theme) {
    case 'light':
      this.theme = lightBaseTheme;
      break;
    case 'dark':
      this.theme = darkTheme;
      break;
    case 'pink':
      this.theme = pinkTheme;
      break;
    default:
      this.theme = lightBaseTheme;
    }
  }
}

export default new Home();