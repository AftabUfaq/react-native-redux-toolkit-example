import React, {useEffect, useState} from 'react';
import {
    NativeModules,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {color, fontmedium, lightgray, white} from '../constants/colors';
import {findByMatchingProperties, GetUserContacts} from '../logic/getcontact';
import {setContacts} from '../store/actions/ContactActions';
import {UserLoggedIn} from '../store/actions/LoginActions';
const MobileProfileScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const {GetCountryCodeModules} = NativeModules;
    const [defalutCountry, setDefaultCountry] = useState({
        callingCode: '92',
        code: 'PK',
        name: 'Pakistan',
        flag: 'https://www.countryflags.io/PK/flat/64.png',
    });

    useEffect(() => {
        GetCountryCodeModules.getcountrycode().then(countrycode => {
            var results = findByMatchingProperties({
                code: `${countrycode}`.toLocaleUpperCase(),
            });
            GetUserContacts('PK').then(data => {
                dispatch(setContacts(data));
            });
            setDefaultCountry(results[0]);
        });
    }, []);

    const AppPermissions = () => {
        const usermobiledata = {
            id: '300',
            name: 'Aftab Ameem',
            photo: 'https://xxxx.net/finder/apis/v1/images/profileavatar.png',
            email: 'engr.aftabufaq@gmail.com',
            mobile_number: '3408906107',
        };
        const userdata = {
            mobile_number: '3408906107',
            country_code: '+92',
            code: 'PK',
        };
        dispatch(
            UserLoggedIn({
                usermobiledata: usermobiledata,
                userdata: userdata,
            }),
        );
    };

    return (
        <View
            style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center'}}
        >
            <View style={styles.leftballon} />
            <View style={styles.rightballon} />
            <View style={{...styles.logo}} />
            <Text style={styles.headertext}>MobileProfileScreen!</Text>
            <Text style={styles.CallerApp}>Caller App</Text>
            <Text style={styles.paragrapph}>
                Intuitive CallerID to and photo phone book to improve your
                Communication
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => AppPermissions()}
            >
                <Text
                    style={{
                        ...styles.defaulttext,
                        color: white,
                        fontWeight: 'bold',
                    }}
                >
                    GET STARTED
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default MobileProfileScreen;

const styles = StyleSheet.create({
    leftballon: {
        width: wp(50),
        height: wp(50),
        borderRadius: wp(50) / 2,
        position: 'absolute',
        left: -wp(16),
        top: -wp(40) / 4,
        zIndex: 2,
        backgroundColor: lightgray,
    },
    rightballon: {
        width: hp(50),
        height: hp(50),
        borderRadius: hp(50) / 2,
        position: 'absolute',
        right: -hp(37),

        zIndex: 2,

        backgroundColor: lightgray,
        // backgroundColor:"rgba(0, 150, 255,.1)"
    },
    logo: {
        width: wp(35),
        marginTop: hp(25),
        height: wp(35),
        borderRadius: wp(20),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'transparent',
    },
    headertext: {
        fontSize: RFValue(12),
        fontFamily: fontmedium,
        fontWeight: 'bold',
        textAlign: 'center',
        color,
        marginTop: wp(15),
        letterSpacing: 1,
        fontSize: RFValue(18),
    },
    CallerApp: {
        fontSize: RFValue(12),

        textAlign: 'center',
        color,
        marginTop: wp(1),
        fontSize: RFValue(22),
    },
    paragrapph: {
        fontSize: RFValue(12),
        fontFamily: fontmedium,
        textAlign: 'center',
        color,
        fontSize: RFValue(14),
        paddingHorizontal: wp(10),
        paddingVertical: wp(10),
    },
    button: {
        width: wp(55),
        height: hp(7),
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: wp(30),
        shadowRadius: wp(3),
        backgroundColor: '#0090FF',
    },
});
