import {View,Text,AsyncStorage,ActivityIndicator,Image} from 'react-native'
import React, { Component } from 'react'
import DummyImage from '../../static/image/dummy.jpg'
import Button from '../component/button.1'
import {connect} from 'react-redux'
import {logoutUser} from '../redux/action/auth'
class profileScreen extends Component {
    static navigationOptions = {
        title: 'Profile',
        
      }; 
      componentDidMount(){
          this.getUser()
      }
      state={
          user:null
      }
      getUser=async()=>{
        let user=await AsyncStorage.getItem('user')
        this.setState({
            user:JSON.parse(user)
        })
      }
      onLogout=async()=>{
        await AsyncStorage.removeItem('user')
        await this.props.logoutUser
        await this.props.navigation.navigate('AuthLoading')
      }
    render() {
        if(this.state.user!==null){
            return (
                <View style={{flex:1,alignItems:'center',marginTop:20}}>
                    <Image source={DummyImage} style={{width:90,height:90,borderRadius:10}}/>
                    <Text>{this.state.user.user.name}</Text>
                    <Button title='Logout' onPress={this.onLogout} style={{backgroundColor:'black',width:80}}/>

                </View>
            )
        }else{
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:70}}>
                <ActivityIndicator size="large" color="black"/> 
              </View>
            )
        }
        
    }
}
const mapStateToProps=state=>{
    return{
        auth:state.auth
    }
}
export default connect(mapStateToProps,{logoutUser})(profileScreen)