import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import AuthScreen from './screens/AuthScreen';
import AddCook from './screens/CookScreen/AddCook';
import UserCook from './screens/CookScreen/UserCook';



const headerConfig = {

}

const HomeStack = createStackNavigator({
    Home: HomeScreen
})

const AuthStack = createStackNavigator({
    Auth: AuthScreen
}, {
    headerMode: 'none'
})
const AddCookStack = createStackNavigator({
    AddCook: AddCook
})
const UserCookStack = createStackNavigator({
    UserCook: UserCook
})

const AppBottom = createBottomTabNavigator({
    Home: {
        screen: HomeStack
    },
    Add: {
        screen: AddCookStack
    }
})

const AppDrawer = createDrawerNavigator({
    AppBottom: AppBottom,
    User: UserCookStack
})

export default createAppContainer(createSwitchNavigator({
    App: AppDrawer,
    Auth: AuthStack,
    Splash: SplashScreen
}, {
    initialRouteName: 'Auth'
}))