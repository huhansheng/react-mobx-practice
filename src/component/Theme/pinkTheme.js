import {
  lightBlue200,
  lightBlueA400,
  lightBlue500,
  grey600,
  pinkA100, pinkA200, pinkA400,
  fullWhite
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: fullWhite,
    primary2Color: fullWhite,
    primary3Color: lightBlueA400,
    accent1Color: pinkA200,
    accent2Color: lightBlueA400,
    accent3Color: lightBlueA400,
    textColor: fullWhite,
    secondaryTextColor: fullWhite,
    alternateTextColor: fullWhite,
    canvasColor: pinkA200,
    borderColor: fullWhite,
    disabledColor: fullWhite,
    pickerHeaderColor: fullWhite,
    clockCircleColor: fullWhite
  },
  paper: {
    background: lightBlueA400
  },
  appBar: {
    color: pinkA200
  },
  raisedButton: {
    color: pinkA200
  }
};