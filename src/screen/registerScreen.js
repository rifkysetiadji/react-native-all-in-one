import React, { Component } from 'react'
import {View,Text,TextInput,ScrollView,AsyncStorage,TouchableOpacity,ActivityIndicator,Platform} from 'react-native'
import TextField from '../component/textField.1'
import Button from '../component/button.1'
import {connect} from 'react-redux'
import {register} from '../redux/action/auth'

class registerScreen extends Component {
    static navigationOptions = {
        title: 'Register',
        
      }; 
    state={
        name:'',
        username:'',
        password:''
    }
    componentDidMount(){
        try {
            let get=AsyncStorage.getItem('user')
            console.log('ggg',get)
        } catch (error) {
            console.log(error)
        }
    }
    componentWillReceiveProps(newProps){
        if(newProps.auth.isAuth==true){
        console.log('new',newProps)

        //   this.setToAsync(newProps.auth.user)
        //   this.props.navigation.navigate('Main')

        }else{
          this.props.navigation.navigate('Auth')
        }
    }
    setToAsync=async(user)=>{
        // console.log('set',user)
          try{
           
            let stringData=JSON.stringify(user)
            // let jsonData=JSON.parse(stringData)
            await AsyncStorage.setItem('user', stringData)

          }catch(err){
            // Alert.alert('Login',err)
            console.log(err)
          }
    }
      
    onPress=()=>{
        let data={
            name:this.state.name,
            username:this.state.username,
            password:this.state.password
        }
        this.props.register(data)
    }
    render() {
        return (
            <ScrollView>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:Platform.OS === 'ios'?200:100}}>
                <Text style={{fontSize:40,margin:5}}>Login</Text>
                <TextField placeholder="name" width={200} onChangeText={(name)=>{this.setState({name})}} autoCapitalize="none"/>
                <TextField placeholder="username" width={200} onChangeText={(username)=>{this.setState({username})}} autoCapitalize="none"/>
                <TextField placeholder="password" width={200} onChangeText={(password)=>{this.setState({password})}}secureTextEntry autoCapitalize="none"/>
                {this.props.auth.loading==true ? <ActivityIndicator style={{margin:10}} size="large" color="black"/> : <Button title="Register" onPress={this.onPress} style={{backgroundColor:'black',width:90,marginTop:10}}/>}
                <TouchableOpacity style={{margin:20}} onPress={()=>this.props.navigation.navigate('Login')}><Text style={{color:'blue'}}>register</Text></TouchableOpacity>
                
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
export default connect(mapStateToProps,{register})(registerScreen)