import {Dimensions, Platform, StyleSheet} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../constants/theme';
const {width} = Dimensions.get('screen');
export const commonStyles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: colors.white,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignSelf: 'center',
        alignItems: 'center',
    },
    headerMianView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: width,
        position: 'relative',
        backgroundColor: colors.statusbarColor,
        paddingVertical: wp(2),
    },
    hedaerWithIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: width,
        position: 'relative',
        height: Platform.OS === 'android' ? hp(5) : hp(5),
        backgroundColor: colors.statusbarColor,
        paddingBottom: hp(2),
    },
    AddButton: {
        alignSelf: 'flex-end',
        paddingHorizontal: wp(5),
        paddingVertical: wp(3),
        position: 'absolute',
        right: hp(2),
        bottom: hp(2),
    },
});
