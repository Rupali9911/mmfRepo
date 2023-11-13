import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Images from '../../Constants/images';
import HomeScreen from '../HomeScreen';
import Profile from '../Profile';
import Search from '../Search';
import Leagues from '../Leagues';
import LeaderBoard from '../LeaderBoard';
import images from '../../Constants/images';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName='HomeScreen'

            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color }) => {
                    let iconName;

                    if (route.name === 'HomeScreen') {
                        iconName = focused ? images.Home : images.Home;
                    } else if (route.name === 'LeaguesScreen') {
                        iconName = focused ? Images.Trophy : Images.Trophy;
                    } else if (route.name === 'LeaderBoardScreen') {
                        iconName = focused ? Images.LeaderBoard : Images.LeaderBoard;

                    } else if (route.name === 'SearchScreen') {
                        iconName = focused ? Images.Search : Images.Search;
                    }
                    else if (route.name === 'ProfilenScreen') {
                        iconName = focused ? Images.Profile : Images.Profile;
                    }
                    return (
                        <Image
                            source={iconName}
                            resizeMode="contain"
                            style={{ width: 24, height: 24 }}
                        />
                    );
                }
            })}
        >
            <Tab.Screen name={'HomeScreen'} component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
            <Tab.Screen name={'LeaguesScreen'} component={Leagues} options={{ tabBarLabel: 'Leagues' }} />
            <Tab.Screen name={'LeaderBoardScreen'} component={LeaderBoard} options={{ tabBarLabel: 'LeaderBoard' }} />
            <Tab.Screen name={'SearchScreen'} component={Search} options={{ tabBarLabel: 'Research' }} />
            <Tab.Screen name={'ProfilenScreen'} component={Profile} options={{ tabBarLabel: 'Profile' }} />
        </Tab.Navigator >
    )
}

export default BottomTab

const styles = StyleSheet.create({})