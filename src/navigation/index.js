import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../constants/theme';
import {GetUserContacts} from '../logic/getcontact';
import {setContacts} from '../store/actions/ContactActions';
import AuthNavigation from './AuthNavigation';
import RootNavigation from './RootNavigation';
const AppContainer = () => {
    StatusBar.setBackgroundColor(colors.statusbarColor);
    const {is_logged_in} = useSelector(state => state.persistedReducer);
    const dispatch = useDispatch();
    if (is_logged_in) {
        GetUserContacts('PK').then(data => {
            dispatch(
                setContacts(
                    data.filter(
                        (v, i, a) =>
                            a.findIndex(
                                t => t.mobile_number === v.mobile_number,
                            ) === i,
                    ),
                ),
            );
        });
    }
    return (
        <NavigationContainer>
            {is_logged_in ? <RootNavigation /> : <AuthNavigation />}
        </NavigationContainer>
    );
};

export default AppContainer;
