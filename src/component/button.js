import React, { Component } from 'react'
import {Text,TouchableOpacity,View,StyleSheet,Dimensions} from 'react-native'
const {width,height}=Dimensions.get('window')
// import styles from './style/buttonStyle'
export default class button extends Component {
    render() {
        const size=this.props.size;
        console.log(size)
        return (
            <View>
                <TouchableOpacity onPress={this.props.onPress} style={[styles.button,this.props.style,{height:this.props.height,backgroundColor:this.props.color,width:this.props.width}]} >
                    <Text style={styles.title}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    button:{
        // height:45,
        // backgroundColor:'#00796b',
        // width:width/2,
        borderRadius:5,
        justifyContent:'center',
        // marginTop:20
    },
    title:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
    }
})
