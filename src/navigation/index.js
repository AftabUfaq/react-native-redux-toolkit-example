import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetUserContacts} from '../logic/getcontact';
import {setContacts} from '../store/actions/ContactActions';
import AuthNavigation from './AuthNavigation';
import RootNavigation from './RootNavigation';
const AppContainer = () => {
    const {is_logged_in} = useSelector(state => state.persistedReducer);
    const dispatch = useDispatch();
    if (is_logged_in) {
        GetUserContacts('PK').then(data => {
            dispatch(setContacts(data));
        });
    }
    return (
        <NavigationContainer>
            {is_logged_in ? <RootNavigation /> : <AuthNavigation />}
        </NavigationContainer>
    );
};

export default AppContainer;
