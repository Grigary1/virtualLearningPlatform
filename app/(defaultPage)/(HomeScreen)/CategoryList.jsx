import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

const CategoryList = ({categories}) => {
  console.log("categories ",categories);
  return (
    <View>
    
      <FlatList data={categories} renderItem={({item,index})=>(
        <View>
          <Image className='w-[40px] h-[40px]' source={{uri:item?.icon?.url}}/>
        </View>
      )}/>
    </View>
  )
}

export default CategoryList