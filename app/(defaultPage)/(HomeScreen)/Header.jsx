import { View, Text, Image, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from './../../../constants/Colors.ts';
import getCategory from './../../../constants/GlobalApi';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import profilePic from './../../../assets/images/man.png'; // Ensure the path is correct

const Header = () => {

    const [categories,setCategories]=useState();

    useEffect(()=>{
        getCategoryData();
    },[])

    const getCategoryData = () => {
        getCategory().then(response => {
                console.log(response); // Log the response
                setCategories(response.categories);
            })
            .catch(error => {
                console.error("Error fetching category:", error); // Handle the error
            });
    };

    const [userDetail, setUserDetail] = useState(null);

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = async () => {
        try {
            // Replace this with your actual API call or client fetch logic
            const user = await fetchUserDetails();
            if (user && user.picture) {
                setUserDetail(user);
            } else {
                setUserDetail({ picture: profilePic }); // Use fallback image if picture is not available
            }
        } catch (error) {
            //console.error('Failed to fetch user details:', error);
            setUserDetail({ picture: profilePic }); // Use fallback image on error
        }
    };

    return (
        <>
            <View className='flex flex-row items-center gap-1'>
                {/* Image */}
                {userDetail ? (
                    <Image
                        source={
                            typeof userDetail.picture === 'string'
                                ? { uri: userDetail.picture } // Remote image
                                : userDetail.picture // Local fallback image
                        }
                        style={{ width: 45, height: 45, borderRadius: 99 }}
                    />
                ) : (
                    <Text>Loading...</Text>
                )}
                <View >
                    <Text className='text-[18px]'>Welcome</Text>
                    <Text
                        className="text-[20px] font-bold text-textCol-PRIMARY">
                        Welcome
                    </Text>
                </View>
            </View>

            {/* Search */}
            <View className='mt-4 justify-between'>
                <TextInput className='bg-white rounded-full pl-6 border border-gray-400' placeholder='Search' />
                <EvilIcons className="absolute right-4 top-1/2 transform -translate-y-1/2" name="search" size={24} color="black" />
            </View>
        </>
    );
};

export default Header;