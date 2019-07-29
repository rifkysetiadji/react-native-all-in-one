import React, { Component } from 'react'
import {View,Text,AsyncStorage,ActivityIndicator,ScrollView,FlatList,Platform} from 'react-native'
// import console = require('console');
import BASE_URL from '../redux/constant/baseUrl'
import axios from 'axios'
import {connect} from 'react-redux'
import {setLoading,getAll,add,deleteTodo,logoutUser} from '../redux/action/todo'
import {getUserDetail} from '../redux/action/auth'
import TextField from '../component/textField.1'
import Button from '../component/button.1'
import DoubleClick from 'react-native-double-tap'
class homeScreen extends Component {
    componentDidMount(){
      this.getUser();
    }
    static navigationOptions = {
      title: 'Home',
      
    }; 
    state={
        user:null,
        todos:[],
        token:null,
        todo:null,
        tap:false
    }
    componentWillReceiveProps(newProps){
        // console.log('newprops',newProps)
        this.setState({todos:newProps.todo.todos})
    }
    
    handleDoubleTap=(id,userId)=>{
      lastTap = null;
      const now = Date.now();
      const DOUBLE_PRESS_DELAY = 300;
      if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
        this.setState({tap:true});
        // console.log('tap',this.state.tap)
        this.props.deleteTodo(id,this.state.user.token,userId)
      } else {
        this.lastTap = now;
      }
    }
    getUser= async()=>{

      let user=await AsyncStorage.getItem('user')
      // console.log('fafa',user)
      this.setState({
        user:JSON.parse(user),
      })
      this.props.getAll(this.state.user.user._id,this.state.user.token)
     
    }
    
    FlatListItemSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#607D8B",
          }}
        />
      );
    }
   renderHeader=()=>{
     return(
      <View style={{flex:1,flexDirection:'row',marginTop:Platform.OS==='ios'?50:30,backgroundColor:'white'}}>
      <TextField placeholder={this.state.user!==null?`what next ${this.state.user.user.name}`:'what next'} width={Platform.OS==='ios'?250:300} onChangeText={(todo)=>this.setState({todo:todo})}/>
      <Button title="Add" onPress={this.add} style={{backgroundColor:'black',width:90,marginTop:6}}/>
      </View>
     )
   }
   onLogout=async()=>{
     try {
       await this.setState({
         user:null,
         todos:'',
         token:null
       })
       await AsyncStorage.removeItem('user')
       await this.props.logoutUser
       await this.props.navigation.navigate('AuthLoading')
      // console.log(test)
     } catch (error) {
       console.log('asdf',error)
     }
   
    
    
   }
    renderTodos=()=>{
      return(
           <View>
            <FlatList
              data={this.state.todos}
              ItemSeparatorComponent = {this.FlatListItemSeparator}
              renderItem={({item}) =>
                <DoubleClick
                  singleTap={() => {
                    console.log("single tap");
                  }}
                  doubleTap={() => {
                    this.props.deleteTodo(item._id,this.state.user.token,item.userId)
                  }}
                  delay={200}
                >
                  <Text style={{padding:10,fontSize:18,height:44}}>{item.todo}</Text>
                </DoubleClick>
              }
              ListHeaderComponent={this.renderHeader()}
              stickyHeaderIndices={[0]}
              keyExtractor={item => item._id}
            />
            </View>
            )
    }
    add=async()=>{
      let data={
        todo:this.state.todo,
        userId:this.state.user.user._id
      }
      await this.props.add(data,this.state.user.token)
      // await this.props.getAll(this.state.user.user._id,this.state.user.token)
      // console.log('ddd',thi)
    }
    render() {
      // console.log('uuuu',this.state.todos)
        if(this.props.todo.loading ===false){
            return (
              <View>
                 {this.state.todos ? this.renderTodos() : <ActivityIndicator size="large" color="black"/> }
                 <View style={{backgroundColor:'black',alignItems:'center',borderRadius:5}}>
                 {/* <Button title="Logout" onPress={this.onLogout} style={{backgroundColor:'color',width:140}}/> */}
                 </View>
                
                 
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
const mapStateToProps=(state)=>{
  // console.log('mapstate',state.todo)
    return{
        todo:state.todo,
        auth:state.auth
    }
}
export default connect(mapStateToProps,{setLoading,getAll,add,getUserDetail,deleteTodo,logoutUser})(homeScreen)