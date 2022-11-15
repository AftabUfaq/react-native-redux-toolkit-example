import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import {useSelector} from 'react-redux';
const HomeScreen = () => {
    const {contacts} = useSelector(state => state.ContactReducer);
    console.log(contacts);
    return (
        <SafeAreaView>
            <StatusBar barStyle={'dark-content'} />
            <ScrollView>
                <Text>I am Home</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
