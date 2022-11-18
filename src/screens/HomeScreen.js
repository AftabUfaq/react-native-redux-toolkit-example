import React from 'react';
import {SafeAreaView, SectionList, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import ContactItem from '../components/ContactItem';
import CustomHeader from '../components/CustomHeader';
import SearchInput from '../components/SearchInput';
import {colors} from '../constants/theme';

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
            <SearchInput />
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
