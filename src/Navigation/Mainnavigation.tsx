import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Text, View} from 'react-native';
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import {Image} from 'react-native';
import Health from '../Screens/Health';
import Tech from '../Screens/Tech';
import Business from '../Screens/Business';
import {getHeaderTitle} from '@react-navigation/elements';
// import LoginScreen from '../Screens/logIn';

const Tab = createBottomTabNavigator();
function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;
            const homeIconOutline = require('../../assets/home-outline.png');
            const homeIcon = require('../../assets/home.png');
            const searchIconOutline = require('../../assets/search-outline.png');
            const searchIcon = require('../../assets/search.png');
            const businessIcon = require('../../assets/briefcase.png');
            const businessIconOutline = require('../../assets/briefcase-outline.png');
            const healthIcon = require('../../assets/cardiogram.png');
            const healthIconOutline = require('../../assets/cardiogram-outline.png');
            const techIcon = require('../../assets/technology.png');
            const techIconOutline = require('../../assets/technology-outline.png');
            if (rn === 'Home') {
              iconName = focused ? homeIcon : homeIconOutline;
            } else if (rn === 'Search') {
              iconName = focused ? searchIcon : searchIconOutline;
            } else if (rn === 'Business') {
              iconName = focused ? businessIcon : businessIconOutline;
            } else if (rn === 'Health') {
              iconName = focused ? healthIcon : healthIconOutline;
            } else if (rn === 'Tech') {
              iconName = focused ? techIcon : techIconOutline;
            }

            return (
              <Image source={iconName} style={{width: size, height: size}} />
            );
          },
          header: ({options, route}) => {
            const title = getHeaderTitle(options, route.name);
            return (
              <View
                style={{
                  flexDirection: 'row',
                  height: 60,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 7,
                }}>
                <Text style={{fontSize: 20}}>{title}</Text>
                <Image
                  source={require('../../assets/diskette.png')}
                  style={{height: 30, width: 25, marginRight: 5}}
                />
              </View>
            );
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Health" component={Health} />
        <Tab.Screen name="Tech" component={Tech} />
        <Tab.Screen name="Business" component={Business} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
