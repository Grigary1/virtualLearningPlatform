import { View, Text } from 'react-native'
import React from 'react'
import Category from './../(defaultPage)/(HomeScreen)/CategoryList.jsx'
import Header from './../(defaultPage)/(HomeScreen)/Header'

const index = () => {
  return (
    <View className='p-8'>
      <Header/>
      <Category/>
    </View>
  )
}

export default index