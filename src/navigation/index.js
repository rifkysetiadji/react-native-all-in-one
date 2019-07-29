import { createStackNavigator,createAppContainer} from 'react-navigation'
import LaunchScreen from '../screen/launchScreen'
import LoginScreen from '../screen/loginScreen'
const PrimaryNav = createStackNavigator({
    LaunchScreen:{screen:LaunchScreen},
    LoginScreen:{screen:LoginScreen},
  }, {
    // Default config for all screens
    
    initialRouteName: 'LoginScreen',
    
  })
  
  export default createAppContainer(PrimaryNav)