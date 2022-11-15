import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import GettingStartedScreen from '../screens/GettingStartedScreen';
import MobileProfileScreen from '../screens/MobileProfileScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
const Stack = createNativeStackNavigator();

function AuthNavigation() {
    const {is_privacy_accepted} = useSelector(state => state.persistedReducer);

    return (
        <Stack.Navigator
            initialRouteName={
                is_privacy_accepted
                    ? 'MobileProfileScreen'
                    : 'GettingStartedScreen'
            }
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen
                name="GettingStartedScreen"
                component={GettingStartedScreen}
            />
            <Stack.Screen
                name="PrivacyPolicyScreen"
                component={PrivacyPolicyScreen}
            />
            <Stack.Screen
                name="MobileProfileScreen"
                component={MobileProfileScreen}
            />
        </Stack.Navigator>
    );
}

export default AuthNavigation;
