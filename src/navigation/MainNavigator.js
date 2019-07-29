import React, { Component } from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screen/homeScreen'
import Map from '../screen/mapScreen'
import Profile from '../screen/profileScreen'
import Music from '../screen/musicScreen'
import TabBarIcon from '../component/tabBarIcon'


const Homes = createStackNavigator(
    {
      Home: HomeScreen,
    }
);
Homes.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name='home'
      />
    ),
  };
const Maps=createStackNavigator(
    {
        Map:Map
    }
)
Maps.navigationOptions = {
    tabBarLabel: 'Map',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name='map-signs'
      />
    ),
  };
const Musik=createStackNavigator(
    {
        Music:Music
    }
)
Musik.navigationOptions = {
    tabBarLabel: 'Musik',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name='music'
      />
    ),
  };
const Profiles=createStackNavigator(
    {
        Profile:Profile
    }
)
Profiles.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name='user'
      />
    ),
  };
const tabNavigator = createBottomTabNavigator({
    // Homes,
    Maps,
    Musik,
    Profiles,
  });
export default tabNavigator