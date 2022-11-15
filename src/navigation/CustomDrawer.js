import {DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import LOGO from '../assets/svgs/Logo.svg';
import {hp} from '../constants/scaling';
import {colors, fonts} from '../constants/theme';
import routte_data from './drawer';

const CustomDrawer = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={styles.drawercontent}>
                <LOGO width={wp(40)} height={wp(60)} />
            </View>
            <DrawerContentScrollView
                contentContainerStyle={styles.contentContainerStyle}
                style={styles.DrawerContentScrollView}
            >
                {routte_data.map((item, index) => (
                    <TouchableOpacity
                        key={`${index}`}
                        style={styles.btnView}
                        onPress={() => navigation.navigate(item.route)}
                    >
                        {item.icon}
                        <Text style={styles.textStyle}>{item.label}</Text>
                        <Entypo
                            size={wp(10)}
                            style={{position: 'absolute', right: wp(3)}}
                            name={'chevron-small-right'}
                            color={colors.secondaryTextColor}
                        />
                    </TouchableOpacity>
                ))}
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};
export default CustomDrawer;

const styles = StyleSheet.create({
    DrawerContentScrollView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainerStyle: {
        alignItems: 'flex-start',
        paddingTop: 0,
        marginStart: 0,
        justifyContent: 'flex-start',
    },
    drawercontent: {
        padding: wp(1),
        width: '100%',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: wp(5),
        alignItems: 'center',
        backgroundColor: colors.primaryColor,
    },
    btnView: {
        paddingLeft: wp(5),
        height: hp(7),
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.inputBgColor,
        width: '100%',
        alignItems: 'center',
    },
    textStyle: {
        marginLeft: wp(8),
        fontSize: RFValue(14),
        fontFamily: fonts.Medium,
        includeFontPadding: false,
        color: colors.textPrimaryColor,
    },
});
