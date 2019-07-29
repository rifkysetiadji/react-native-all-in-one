import Icon from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native'
import React, { Component } from 'react'

export default class tabBarIcon extends Component {
    render() {
        return (
            
               <Icon name={this.props.name} size={26} color={this.props.focused ? 'black' : 'grey'} /> 
           
        )
    }
}
