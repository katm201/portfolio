/*
 *
 * MATERIAL UI THEME DEFINITIONS
 *
 */
import { darken, lighten } from 'material-ui/utils/colorManipulator';

export const themeInfo = {
  palette: {
    primary1Color: '#002171',
    primary2Color: '#0d47a1',
    primary3Color: '#5472d3',
    accent1Color: '#e91e63',
    accent2Color: '#ff6090',
    accent3Color: '#b0003a',
    textColor: '#000',
    alternateTextColor: '#fff',
    canvasColor: '#fafafa',
    disabledColor: 'grey',
  },
};

export const customizations = {
  avatar: {
    borderColor: null,
  },
  toolbar: {
    backgroundColor: darken(themeInfo.palette.primary1Color, 0.1),
    height: 56,
    titleFontSize: 20,
    iconColor: themeInfo.palette.alternateTextColor,
    separatorColor: themeInfo.palette.alternateTextColor,
  },
  svgIcon: {
    color: themeInfo.palette.alternateTextColor,
  },
};

export const lightBlue = lighten(themeInfo.palette.primary2Color, 0.2);
