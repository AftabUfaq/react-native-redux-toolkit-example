import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import CustomDrawer from './CustomDrawer';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function RootNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
}

const StackNavigator = () => (
    <Drawer.Navigator
        gestureEnabled={false}
        screenOptions={{
            swipeEnabled: true,
            headerShown: false,
        }}
        drawerContent={props => <CustomDrawer {...props} />}
    >
        <Drawer.Screen name="RootNavigation" headerShown={false}>
            {props => <RootNavigation {...props} />}
        </Drawer.Screen>
    </Drawer.Navigator>
);

export default StackNavigator;
