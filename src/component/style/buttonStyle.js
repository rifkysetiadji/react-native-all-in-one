import {StyleSheet,Dimensions} from 'react-native'
const {width,height}=Dimensions.get('window')
import React, { Component } from 'react'

export default class buttonStyle extends Component {
    
    render() {
        StyleSheet.create({
            button:{
                height:45,
                backgroundColor:'#00796b',
                width:width/2,
                borderRadius:5,
                justifyContent:'center',
                marginTop:20
            },
            title:{
                color:'white',
                textAlign:'center',
                fontWeight:'bold',
                fontSize:20
            }
        })
        
    }
}

export default buttonStyle