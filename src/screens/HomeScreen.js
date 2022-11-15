import React from 'react';
import {SafeAreaView, SectionList, StatusBar, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useSelector} from 'react-redux';
import ContactItem from '../components/ContactItem';
import CustomHeader from '../components/CustomHeader';
import {wp} from '../constants/scaling';
import {colors, fonts} from '../constants/theme';

const renderItem = ({item, index}) => <ContactItem item={item} index={index} />;
const HomeScreen = () => {
    const {contacts, contact_sections} = useSelector(
        state => state.ContactReducer,
    );
    if (contact_sections.length < 1) return null;
    return (
        <SafeAreaView>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={colors.statusbarColor}
            />
            <CustomHeader
                title={'Search Caller ID'}
                show_backButton={true}
                isdrawer={true}
                onPress={() => navigation.openDrawer()}
            />
            <SectionList
                sections={contact_sections}
                renderItem={({item}) => <ContactItem item={item} />}
                legacyImplementation={false}
                horizontal={false}
                windowSize={150}
                removeClippedSubviews={false}
                initialNumToRender={20}
                // renderSectionHeader={({section: {title}}) => (
                //     <Text
                //         style={{
                //             backgroundColor: colors.primaryColor,
                //             color: colors.white,
                //             fontFamily: fonts.Bold,
                //             width: wp(90),
                //             alignSelf: 'center',
                //             paddingHorizontal: wp(5),
                //             paddingVertical: wp(2),
                //             fontSize: RFValue(16),
                //         }}
                //     >
                //         {title}
                //     </Text>
                // )}
                updateCellsBatchingPeriod={30}
                onEndReachedThreshold={0.07}
                maxToRenderPerBatch={30}
                getItemLayout={(data, index) => ({
                    length: 54,
                    offset: 54 * index,
                    index,
                })}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;

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
