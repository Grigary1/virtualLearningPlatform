import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';

const CategoryList = ({ categories }) => {
  console.log("categories from cate:", categories);

  // Access the array inside the object
  const categoryArray = categories?.categories || []; // Ensure fallback to an empty array

  // Log each category for debugging
  categoryArray.forEach((category, index) => {
    console.log(`Category ${index + 1}:`, category);
    console.log("Icons:", category.icons);
    console.log("Name:", category.name);
    console.log("ID:", category.id);
  });

  return (
    <View>
      <FlatList
  data={categoryArray}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View>
      <Text>{item.name}</Text>
      {item.icons.map((icon, index) => {
        // Access the `url` property inside the `icon` object
        if (icon.url) {
          return (
            <Image
              key={index}
              source={{ uri: icon.url }}
              style={{ width: 100, height: 100, resizeMode: 'contain' }}
            />
          );
        } else {
          console.warn(`Icon at index ${index} is missing a URL:`, icon);
          return null;
        }
      })}
    </View>
  )}
/>


    </View>
  );
};

export default CategoryList;
