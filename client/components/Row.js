import { View, Text, FlatList,Dimensions } from 'react-native'
import React from 'react'
import { Image } from "expo-image";
const { width, height } = Dimensions.get("window");
const data = [
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1606937295547-bc0f668595b3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5ldGZsaXh8ZW58MHx8MHx8fDA%3D",
    title: "Just £50 a month",
    sub_title: "Sky Stream inc Netflix",
  },
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D",
    title: "Retail therapy",
    sub_title: "Spend and earn on your favourite brands",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1556228149-0b37a8638663?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fFN1YnNjcmlwdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Explore subscriptions",
    sub_title: "Included with selected plans",
  },

  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1558882199-fc72dcba2994?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGdpcmwlMjBvbiUyMHZhY2F0aW9ufGVufDB8fDB8fHww",
    title: "Springtime holiday hotspots",
    sub_title: "Spring's top travel destinations",
  },
];
const Row = () => {
  return (
    <View>
      <FlatList
      horizontal
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({item}) => (
          <View className="relative mt-5">
            <Image
              style={{ height: height*0.4, width: width*0.94,margin:5,borderRadius:10 }}
              source={item.image}
              contentFit="cover"
              transition={1000}
            />
            <Text className="absolute bottom-16  font-bold text-white text-3xl px-4">
             {item.title}
            </Text>
            <Text className="absolute bottom-8 font-semibold text-white text-lg px-4">
            {item.sub_title}
            </Text>
           
          </View>
        )}
      />
    </View>
  );
}

export default Row