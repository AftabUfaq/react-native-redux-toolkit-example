import {Dimensions} from 'react-native';
export const fonts = {
  Bold: 'Poppins-Bold',
  BoldItalic: 'Poppins-BoldItalic',
  Italic: 'Poppins-Italic',
  Medium: 'Poppins-Medium',
  MediumItalic: 'Poppins-MediumItalic',
  Light: 'Poppins-Light',
  LightItalic: 'Poppins-LightItalic',
  Regular: 'Poppins-Regular',
};

export const colors = {
  statusbarColor: '#02172f',
  primaryColor: '#02172f', // '#425486',
  lightPrimaryColor: '#021226',
  secondaryColor: '#fa9e1b',
  lightSecondaryColor: '#f2a12e',
  textPrimaryColor: '#0009',
  secondaryTextColor: '#aab0c7',
  borderColor: '#c2c2c2',
  errorTextColor: '#bf2626',
  deleteIconColor: '#bf2626',
  successIconColor: '#0e7d07',
  white: '#ffff',
  inputBgColor: 'rgba(241,242,246,255)',
  transparentbgColor: '#010913',
  GradientColors: [
    'rgba(2, 23, 47,.99)',
    'rgba(2, 23, 47,.99)',
    'rgba(2, 23, 47,.99)',
    'rgba(2, 23, 47,.99)',
    'rgba(2, 23, 47,.99)',
    'rgba(2, 23, 47,.99)',
    //'rgba(66, 84, 134,.99)',
    'rgba(2, 23, 47,.99)',
  ],
};

export const regex_email =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export const {width, height} = Dimensions.get('screen');
export const AppScreenWidth = width / 1.1;
