import {
  cyan500,
  cyan700,
  grey400,
  grey100,
  grey300,
  grey500,
  grey600,
  darkBlack,
  white,
  pinkA100, pinkA200, pinkA400,
  fullBlack,
  fullWhite
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: white,
    primary2Color: white,
    primary3Color: white,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: white,
    alternateTextColor: white,
    canvasColor: fullBlack,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },

  appBar: {
    color: fullBlack
  },
  raisedButton: {
    color: fullBlack
  }
};