import React, { Component } from 'react'
import {TouchableOpacity,Text} from 'react-native'
export default class button extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={[this.props.style,{borderRadius:5,justifyContent:'center',height:45}]}>
                <Text style={{color:'white',textAlign:'center',fontWeight:'bold',fontSize:20}}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}
