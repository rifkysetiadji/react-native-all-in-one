import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainNavigator';
import AuthLoadingScreen from '../../src/screen/AuthLoadingScreen'
import AuthNavigator from './AuthNavigator'
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading:AuthLoadingScreen,
    Main: MainTabNavigator,
    Auth:AuthNavigator
  },{
    initialRouteName:'AuthLoading'
  })
);
