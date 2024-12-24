import { View, Text, Image, TouchableOpacity, TouchableHighlight, Touchable } from 'react-native'
import React from 'react'
import { Colors } from './../../constants/Colors.ts'
import { useRouter } from 'expo-router'

const route=useRouter();
export default function LoginScreen() {
  return (
    <View>
      <Image className="w-[100%] h-[400] object-cover" source={require('./../../assets/images/rocket.jpg')} />
      <View className="p-[20]">
        <Text className="text-4xl font-bold">Welcome To {'\n'}<Text style={{ color: Colors.textCol.PRIMARY }}>CodeBox</Text></Text>
        <Text style={{ color: Colors.textCol.GRAY }}>Learn Programming to Build Real Life Projects</Text>

        {/* SignIn Button */}
        <TouchableOpacity onPress={()=>route.push('/(defaultPage)')}>
          <View style={{ backgroundColor: Colors.textCol.PRIMARY }} className="p-3 rounded-full mt-[60]">
            <Text className="text-center text-white text-xl">Sign In</Text>
          </View>
        </TouchableOpacity>

        {/* Create an account */}
        <TouchableOpacity>
          <Text style={{ color: Colors.textCol.PRIMARY }} className="text-center mt-5">Create New Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}