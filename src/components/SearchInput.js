import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {hp, wp} from '../constants/scaling';
import {colors, fonts} from '../constants/theme';
const SearchInput = () => {
    return (
        <View
            style={{
                marginTop: wp(2),
                backgroundColor: '#0001',
                alignSelf: 'center',
                flexDirection: 'row',
                width: wp(96),
                overflow: 'hidden',
                borderRadius: wp(2),
            }}
        >
            <View
                style={{
                    width: wp(14),
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: hp(7),
                    backgroundColor: '#0000',
                }}
            >
                <FontAwesome
                    name="search"
                    size={wp(8)}
                    color={colors.textPrimaryColor}
                />
            </View>
            <TextInput
                style={{width: wp(68), height: hp(7), backgroundColor: '#0001'}}
            />
            <TouchableOpacity
                style={{
                    width: wp(14),
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: hp(7),
                    backgroundColor: '#0090FF',
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontFamily: fonts.Bolds,
                        fontSize: RFValue(14),
                    }}
                >
                    Go
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default SearchInput;
