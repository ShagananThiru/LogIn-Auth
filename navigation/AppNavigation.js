import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// import HomeScreen from "../screens/HomeScreen";
import CatalogsScreen from "../screens/CatalogsScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import BookingScreen from "../screens/BookingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from '../screens/HomeScreen';




const AppNavigation = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
          </View>
        ),
        activeColor: '#FF0000',
        inactiveColor: '#FFFFFF',
        barStyle: { backgroundColor: '#080115' },
      }
    },
    Catalog: {
      screen: CatalogsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-briefcase'} />
          </View>
        ),
        activeColor: '#FF0000',
        inactiveColor: '#FFFFFF',
        barStyle: { backgroundColor: '#080115' },
      }
    },

    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-notifications'} />
          </View>
        ),
        activeColor: '#FF0000',
        inactiveColor: '#FFFFFF',
        barStyle: { backgroundColor: '#080115' },
      }
    },
    Booking: {
      screen: BookingScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-cart'} />
          </View>
        ),
        activeColor: '#FF0000',
        inactiveColor: '#FFFFFF',
        barStyle: { backgroundColor: '#080115' },
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-person'} />
          </View>
        ),
        activeColor: '#FF0000',
        inactiveColor: '#FFFFFF',
        barStyle: { backgroundColor: '#080115' },
      }
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: { backgroundColor: '#6948f4' },
  }
);

export default AppNavigation;




