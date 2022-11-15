import React from 'react';
import {View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MainRoutes from '../constants/MainRoutes';
import {wp} from '../constants/scaling';
import {colors} from '../constants/theme';
const routte_data = [
    {
        id: '1',
        label: 'Home',
        route: `${MainRoutes.BottomTabs}`,
        icon: (
            <View style={style}>
                <MaterialIcons
                    size={wp(6)}
                    color={colors.primaryColor}
                    name={'privacy-tip'}
                />
            </View>
        ),
    },
    {
        id: '2',
        label: 'Search',
        route: `${MainRoutes.AirportsListScreen}`,
        icon: (
            <View style={style}>
                <MaterialIcons
                    size={wp(6)}
                    color={colors.primaryColor}
                    name={'privacy-tip'}
                />
            </View>
        ),
    },
    {
        id: '3',
        label: 'History',
        route: `${MainRoutes.ParkingTypesScreen}`,
        icon: (
            <View style={style}>
                <MaterialIcons
                    size={wp(6)}
                    color={colors.primaryColor}
                    name={'privacy-tip'}
                />
            </View>
        ),
    },

    {
        id: '4',
        label: 'Photos',
        route: `${MainRoutes.ManageBookingsScreen}`,
        icon: (
            <View style={style}>
                <MaterialIcons
                    size={wp(6)}
                    color={colors.primaryColor}
                    name={'privacy-tip'}
                />
            </View>
        ),
    },
    {
        id: '6',
        label: 'Share with Friends',
        route: `${MainRoutes.BlogsScreen}`,
        icon: (
            <View style={style}>
                <MaterialIcons
                    size={wp(6)}
                    color={colors.primaryColor}
                    name={'privacy-tip'}
                />
            </View>
        ),
    },
    {
        id: '8',
        label: `Privacy Policy`,
        route: `${MainRoutes.FaqScreen}`,
        icon: (
            <View style={style}>
                <MaterialIcons
                    size={wp(6)}
                    color={colors.primaryColor}
                    name={'privacy-tip'}
                />
            </View>
        ),
    },
    {
        id: '9',
        label: 'Rate us',
        route: `${MainRoutes.HelpDiskScreen}`,
        icon: (
            <View style={style}>
                <MaterialIcons
                    size={wp(6)}
                    color={colors.primaryColor}
                    name={'security'}
                />
            </View>
        ),
    },
];

const style = {
    width: wp(6),
    height: wp(6),
};

export default routte_data;
