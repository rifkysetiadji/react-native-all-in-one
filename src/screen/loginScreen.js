import React, { Component } from 'react'
import {View,Text,Alert,TextInput,AsyncStorage,TouchableOpacity,ScrollView,ActivityIndicator,Platform} from 'react-native'
import TextField from '../component/textField.1'
import Button from '../component/button.1'
import {login} from '../redux/action/auth'
import { connect } from 'react-redux';
// import console = require('console');
class loginScreen extends Component {

	 static navigationOptions = {
        title: 'Login',
        
      }; 
      state={
          username:'',
          password:''
      }
      componentWillReceiveProps(newProps){
          if(newProps.auth.isAuth==true){
          console.log('new',newProps.auth.user)

            this.setToAsync(newProps.auth.user)
            this.props.navigation.navigate('Main')

          }else{
            this.props.navigation.navigate('Auth')
          }
      }
      setToAsync=async(user)=>{
        // console.log('set',user)
          try{
            // let data={
            //   token:token,
            //   userName:user.name,
            //   userId:user._id
            // }
            let stringData=JSON.stringify(user)
            // let jsonData=JSON.parse(stringData)
            await AsyncStorage.setItem('user', stringData)

            // await AsyncStorage.multiSet([['token',token],['user',JSON.stringify(user)]])
            // await AsyncStorage.setItem('token', token)
            // await AsyncStorage.setItem('userId', user._id)
            // await AsyncStorage.setItem('userName', user.name)


            // console.log('ff',stringData)
          }catch(err){
            // Alert.alert('Login',err)
            console.log(err)
          }
        
      }
      onPress= async()=>{
        let data={
            username:this.state.username,
            password:this.state.password
        }
        await this.props.login(data)
    }
    render() {
        return (
            <ScrollView>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:Platform.OS === 'ios'?200:100}}>
                <Text style={{fontSize:40,margin:5}}>Login</Text>
                <TextField placeholder="username" width={200} onChangeText={(username)=>{this.setState({username})}} autoCapitalize="none"/>
                <TextField placeholder="password" width={200} onChangeText={(password)=>{this.setState({password})}}secureTextEntry autoCapitalize="none"/>
                {this.props.auth.loading==true ? <ActivityIndicator style={{margin:10}} size="large" color="black"/> : <Button title="Login" onPress={this.onPress} style={{backgroundColor:'black',width:90,marginTop:10}}/>}
                <TouchableOpacity style={{margin:20}} onPress={()=>this.props.navigation.navigate('Register')}><Text style={{color:'blue'}}>register</Text></TouchableOpacity>
                
            </View>
        </ScrollView>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        auth:state.auth
    }
}
export default connect(mapStateToProps,{login})(loginScreen)