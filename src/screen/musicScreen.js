import {View,Text} from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class musicScreen extends Component {
    static navigationOptions = {
        title: 'Music',
        
      }; 
    render() {
        return (
            <View>
               <Text>Music</Text> 
               <Icon name="map-signs" size={30} color="grey" />
               <Icon name="home" size={30} color="grey" />
               <Icon name="music" size={30} color="grey" />
               <Icon name="user" size={30} color="grey" />
               
            </View>
        )
    }
}
