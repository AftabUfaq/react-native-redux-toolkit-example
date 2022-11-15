import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Feather';
import {colors, fonts} from '../constants/theme';
import {commonStyles} from '../styles/commonStyles';
const CustomHeader = ({isdrawer, show_backButton, title, onPress}) => {
    return (
        <View
            style={{
                ...commonStyles.headerMianView,
                justifyContent: 'space-between',
            }}
        >
            {show_backButton && (
                <TouchableOpacity
                    style={{
                        shadowColor: '#fff',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 3.84,
                        elevation: 5,
                    }}
                    onPress={onPress}
                >
                    {isdrawer ? (
                        <AntDesign
                            color={colors.white}
                            name="menu-fold"
                            style={{marginLeft: 12}}
                            size={wp(8)}
                        />
                    ) : (
                        <Entypo
                            color={colors.white}
                            name="chevron-left"
                            size={wp(10)}
                        />
                    )}
                </TouchableOpacity>
            )}

            <Text
                style={{
                    fontFamily: fonts.Medium,
                    fontSize: RFValue(16),
                    color: colors.white,
                }}
            >
                {title}
            </Text>

            {show_backButton && <View style={{width: 36, height: 36}} />}
        </View>
    );
};

export default CustomHeader;
