import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import getCategory from './../../constants/GlobalApi';
import Category from './../(defaultPage)/(HomeScreen)/CategoryList.jsx';
import Header from './../(defaultPage)/(HomeScreen)/Header';

const Index = () => {
  const [categories,setCategories]=useState();
  
      useEffect(()=>{
          getCategoryData();
      },[])
  
      const getCategoryData = () => {
          getCategory().then(response => {
                  console.log(response); // Log the response
                  setCategories(response);
              })
              .catch(error => {
                  console.error("Error fetching category:", error); // Handle the error
              });
      }; // State to store categories

      console.log("index cate",categories);
  return (
    <View className="p-8">
      {/* Pass the setCategories function to Header */}
      <Header/>
      
      {/* Pass the categories to Category component */}

      <Category categories={categories} />
    </View>
  );
};

export default Index;
