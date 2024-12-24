import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import index from './index.tsx';
import {Colors} from './../../constants/Colors.ts'

const Tab=createBottomTabNavigator();
const _layout = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,
        tabBarActiveTintColor:Colors.textCol.PRIMARY
    }}>
        <Tab.Screen  name="Home" component={index} options={{
            tabBarIcon:({focused,color,size})=>(
                focused?<Ionicons name="home-sharp" size={24} color={color} />:<Ionicons name="home-outline" size={24} color={color} />
            )
        }}/>
        <Tab.Screen name="MyCourses" component={index} options={{
            tabBarIcon:({focused,color,size})=>(
                focused?<Ionicons name="laptop-sharp" size={24} color={color} />:<Ionicons name="laptop-outline" size={24} color={color} />
            )
        }}/>
        <Tab.Screen name="Profile" component={index} options={{
            tabBarIcon:({focused,color,size})=>(
                focused?<Ionicons name="person" size={24} color={color} />:<Ionicons name="person-outline" size={24} color={color} />
            )
        }}/>
    </Tab.Navigator>
  )
}

export default _layout