import {Text,View,StyleSheet} from 'react-native'
import React, { Component } from 'react'
import Button from '../component/button'
import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#333333'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#333333'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#333333'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })
export default class launchScreen extends Component {
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                <Text style={styles.text}>Hello</Text>
                </View>
                <View style={styles.slide2}>
                <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                <Text style={styles.text}>
                    And simple
                </Text>
                <View style={{top:20}}>
                    <Button title="Login" onPress={()=>alert('test')} color="grey" width={90} height={45}/>
                </View>
                
                </View>
            </Swiper>
        )
    }
}
