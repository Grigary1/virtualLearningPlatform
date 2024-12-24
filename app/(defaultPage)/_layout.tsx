import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import index from './index.tsx';

const Tab=createBottomTabNavigator();
const _layout = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Home" component={index}/>
        <Tab.Screen name="Profile" component={index}/>
    </Tab.Navigator>
  )
}

export default _layout