import React, {memo} from 'react';
import {
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import AVATAR from '../assets/svgs/avatarbg.svg';
import CALLBG from '../assets/svgs/callbg.svg';
import {wp} from '../constants/scaling';
import {colors, fonts} from '../constants/theme';

const ContactItem = ({item}) => {
    const contact = item;
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('ContactProfileScreen', {item: contact})
            }
            style={{
                height: wp(15),
                backgroundColor: colors.backgroundColor,
                alignSelf: 'center',
                width: wp(90),

                justifyContent: 'space-between',
            }}
        >
            <View style={styles.row}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                    }}
                >
                    {contact.image !== '' ? (
                        <Image
                            style={{
                                width: wp(11),
                                resizeMode: 'center',
                                height: wp(11),
                                borderWidth: 1,
                                borderColor: colors.primaryColor,
                                alignSelf: 'center',
                                borderRadius: wp(20),
                                overflow: 'hidden',
                            }}
                            source={{uri: `${contact.image}`}}
                        />
                    ) : (
                        <AVATAR
                            width={wp(11)}
                            height={wp(11)}
                            style={{alignSelf: 'center'}}
                        />
                    )}
                    <View style={styles.rContainer}>
                        <Text numberOfLines={1} style={styles.title}>
                            {contact.name.substring(0, 28)}
                        </Text>
                        <Text style={styles.subtitle}>
                            {contact.mobile_number}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        width: wp(12),
                        backgroundColor: '#ECF0F3',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: wp(9),
                        alignSelf: 'center',
                    }}
                >
                    <TouchableOpacity
                        style={styles.dialer_icon}
                        onPress={() =>
                            Linking.openURL(`tel:${contact.mobile_number}`)
                        }
                    >
                        <CALLBG height={wp(10)} width={wp(10)} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

//export default ContactItem;
export default memo(ContactItem);
const styles = StyleSheet.create({
    dialer_icon: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'transparent',
    },
    empty: {
        marginVertical: 20,
        alignSelf: 'center',
    },
    section: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#EEE',
        justifyContent: 'center',
        width: '100%',
    },
    sectionText: {
        fontSize: 14,
        paddingLeft: 10,
    },
    row: {
        minHeight: wp(14),
        maxHeight: wp(14),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ECF0F3',
        marginVertical: 3,
        paddingHorizontal: 5,
        paddingLeft: 10,
    },
    rContainer: {
        marginLeft: 0,
    },
    title: {
        fontSize: RFValue(15),
        fontFamily: fonts.Bold,
        backgroundColor: '#ECF0F3',
        paddingVertical: 1,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: 'rgba(25, 53, 102, 1)',
        textAlign: 'left',
    },
    subtitle: {
        fontSize: RFValue(14),
        marginTop: 0,
        fontFamily: fonts.Medium,
        color: 'rgba(25, 53, 102, 1)',
        paddingHorizontal: 10,
        borderRadius: 30,
    },
});
