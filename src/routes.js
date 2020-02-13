import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import AuthScreen from './screens/AuthScreen';
import AddCook from './screens/CookScreen/AddCook';
import UserCook from './screens/CookScreen/UserCook';
import HomeIcon from './components/BottomIcon/HomeIcon';
import AddIcon from './components/BottomIcon/AddIcon';


const headerConfig = {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#C76361'
        },
        headerTintColor: 'white',
        // headerTitle: "Home"
    }
}

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Recipe Book'
        }
    }
},
    headerConfig)

const AuthStack = createStackNavigator({
    Auth: AuthScreen
}, {
    headerMode: 'none'
})
const AddCookStack = createStackNavigator({
    AddCook: {
        screen: AddCook,
        navigationOptions: {
            headerTitle: 'Recipe'
        }
    }
}, headerConfig)
const UserCookStack = createStackNavigator({
    UserCook: UserCook
})

const AppBottom = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <HomeIcon color={tintColor} />
            }
        }
    },
    Add: {
        screen: AddCookStack,
        navigationOptions: {
            tabBarIcon: ({ }) => {
                return <AddIcon />
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: "#C76361",
        showLabel: false,
        activeBackgroundColor: '#C76361',
        inactiveBackgroundColor: '#cecece',

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