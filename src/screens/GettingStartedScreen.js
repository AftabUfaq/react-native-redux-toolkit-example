
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import { color, fontmedium, lightgray, white } from '../constants/colors';
const GettingStartedScreen = ({navigation}) => {
  const {is_privacy_accepted,} = useSelector(state => state.persistedReducer)

  const AppPermissions = () => {
    navigation.navigate("PrivacyPolicyScreen")
  };

  return (
    <View style={{flex:1,backgroundColor:"#fff", justifyContent:"center", }}>
        <View style={styles.leftballon} />
        <View style={styles.rightballon} />
        <View style={{...styles.logo}} />        
        <Text style={styles.headertext}>Welcome!</Text>
        <Text style={styles.CallerApp}>Caller App</Text>
        <Text style={styles.paragrapph}>
          Intuitive CallerID to and photo phone book to improve your
          Communication
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => AppPermissions()}>
          <Text style={{...styles.defaulttext, color: white, fontWeight: 'bold'}}>
              GET STARTED
          </Text>
        </TouchableOpacity>
    </View>
  );
};

export default GettingStartedScreen;

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
    fontWeight:"bold",
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
    alignSelf:"center",
    alignItems: 'center',
    borderRadius: wp(30),
    shadowRadius: wp(3),
    backgroundColor: "#0090FF",
  }
});