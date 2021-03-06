import React, { Component } from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
  } from 'react-native';
export default class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
      }
    
      // Fetch the token from storage then navigate to our appropriate place
      _bootstrapAsync = async () => {
        try {
          const userToken = await AsyncStorage.getItem('user');
          if(userToken){
            this.props.navigation.navigate('Main');
          }else{
            this.props.navigation.navigate('Auth');
          }
        } catch (error) {
          
        }
        
    
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        
      };
    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}
