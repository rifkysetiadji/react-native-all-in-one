import React, { Component } from 'react'
import {View,TextInput} from 'react-native'
export default class textField extends Component {
    render() {
        return (
            <View>
                <TextInput 
                    style={[this.props.style,{width:this.props.width,borderBottomWidth:this.props.border,borderBottomColor:this.props.borderColor,fontSize:this.props.fontSize,}]}
                    onChange={this.props.onChange}
                    type={this.props.type}
                    keyboardType={this.props.keyboardType}
                    autoCapitalize={this.props.autoCapitalize}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                />
            </View>
        )
    }
}
