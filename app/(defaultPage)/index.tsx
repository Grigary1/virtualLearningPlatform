import { View } from 'react-native';
import React, { useState } from 'react';
import Category from './../(defaultPage)/(HomeScreen)/CategoryList.jsx';
import Header from './../(defaultPage)/(HomeScreen)/Header';

const Index = () => {
  const [categories, setCategories] = useState([]); // State to store categories

  return (
    <View className="p-8">
      {/* Pass the setCategories function to Header */}
      <Header setCategories={setCategories} />
      
      {/* Pass the categories to Category component */}
      <Category categories={categories} />
    </View>
  );
};

export default Index;
