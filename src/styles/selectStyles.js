import {Icon} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Entypo from 'react-native-vector-icons/Entypo';
import {wp} from '../constants/scaling';
import {colors, fonts} from '../constants/theme';
const selectStyles = {
  _item: {
    pt: Platform.OS === 'android' ? 2 : 2,
    pb: Platform.OS === 'android' ? 2 : 2,
    borderBottomWidth: 1,
    justifyContent: 'center',
    borderRadius: 5,
    borderBottomColor: 'rgba(0,0,0,.1)',
    _text: {
      includeFontPadding: false,
      textAlign: 'center',
      fontFamily: fonts.Medium,
      fontSize: RFValue(13),
      color: colors.textPrimaryColor,
    },
  },
  _selectedItem: {
    bg: colors.transparentbgColor,
    justifyContent: 'center',
    _text: {
      includeFontPadding: false,
      textAlign: 'center',
      fontSize: RFValue(13),
      textAlignVertical: 'center',
      fontFamily: fonts.Bold,
      color: '#fff',
    },
    endIcon: (
      <Icon as={Entypo} name={'check'} size={wp(5)} color={colors.white} />
    ),
  },
};

export default selectStyles;
