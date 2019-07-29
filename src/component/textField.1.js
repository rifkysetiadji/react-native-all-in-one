import React, { Component } from 'react'
import {TextInput,Platform} from 'react-native'
// import Color from '../constants/Colors'
export default class textField extends Component {
    render() {
        return (
            <TextInput
                {...this.props}
                style={[this.props.textFieldStyle,{width:this.props.width,borderWidth:2,height:Platform.OS==='ios'?40:50,textAlign:'center',borderRadius:10,margin:5,fontSize:25}]}
            />
        )
    }
}
