import LoginScreen from '../../src/screen/loginScreen'
import RegisterScreen from '../../src/screen/registerScreen'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const auth=createStackNavigator({
    Login:LoginScreen,
    Register:RegisterScreen
},{
    initialRouteName:'Login',
    navigationOptions:{
        header:null
    }
})
export default auth