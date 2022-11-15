import React from 'react';
import {View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import About from '../assets/svgs/About.svg';
import Airport from '../assets/svgs/AirPort.svg';
import Blog from '../assets/svgs/Blog.svg';
import Faq from '../assets/svgs/Faq.svg';
import Help from '../assets/svgs/Help.svg';
import Home from '../assets/svgs/Home.svg';
import Manage from '../assets/svgs/Manage.svg';
import Type from '../assets/svgs/Type.svg';
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
        <Home width={wp(6)} height={wp(6)} />
      </View>
    ),
  },
  {
    id: '2',
    label: 'Airports',
    route: `${MainRoutes.AirportsListScreen}`,
    icon: (
      <View style={style}>
        <Airport width={wp(6)} height={wp(6)} />
      </View>
    ),
  },
  {
    id: '3',
    label: 'Parking Types',
    route: `${MainRoutes.ParkingTypesScreen}`,
    icon: (
      <View style={style}>
        <Type width={wp(6)} height={wp(6)} />
      </View>
    ),
  },
  {
    id: '13',
    label: 'Airport Guide',
    route: `${MainRoutes.AirportGuideScreen}`,
    icon: (
      <View style={style}>
        <Type width={wp(6)} height={wp(6)} />
      </View>
    ),
  },
  {
    id: '4',
    label: 'Manage Bookings',
    route: `${MainRoutes.ManageBookingsScreen}`,
    icon: (
      <View style={style}>
        <Manage width={wp(6)} height={wp(6)} />
      </View>
    ),
  },
  {
    id: '6',
    label: 'Blogs',
    route: `${MainRoutes.BlogsScreen}`,
    icon: (
      <View style={style}>
        <Blog width={wp(6)} height={wp(6)} />
      </View>
    ),
  },
  {
    id: '8',
    label: `FAQ'S`,
    route: `${MainRoutes.FaqScreen}`,
    icon: (
      <View style={style}>
        <Faq width={wp(6)} height={wp(6)} />
      </View>
    ),
  },
  {
    id: '9',
    label: 'Help Disk',
    route: `${MainRoutes.HelpDiskScreen}`,
    icon: (
      <View style={style}>
        <Help width={wp(6)} height={wp(6)} />
      </View>
    ),
  },
  {
    id: '10',
    label: 'About Us',
    route: `${MainRoutes.AboutUsScreen}`,
    icon: (
      <View style={style}>
        <About width={wp(6)} height={wp(6)} />
      </View>
    ),
  },
  {
    id: '11',
    label: 'App Security',
    route: `${MainRoutes.SiteSecurityScreen}`,
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
  {
    id: '12',
    label: 'Contact Us',
    route: `${MainRoutes.ContactUsScreen}`,
    icon: (
      <View style={style}>
        <About width={wp(6)} height={wp(6)} />
      </View>
    ),
  },
  {
    id: '12',
    label: 'Terms and Conditions',
    route: `${MainRoutes.TermsAndCondiditionsScreen}`,
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
];

const style = {
  width: wp(6),
  height: wp(6),
};

export default routte_data;
