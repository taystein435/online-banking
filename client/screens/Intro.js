import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";

const {width,height}=Dimensions.get("window");
const Intro = ({navigation}) => {
  return (
    <View className="flex-1 relative">
      <Image
        style={{ height: height, width: width }}
        source="https://images.unsplash.com/photo-1512135159328-0fa33838237b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxiYW5rJTIwYXBwfGVufDB8fDB8fHww"
        contentFit="cover"
        transition={1000}
      />

      <Text className="absolute top-96  font-bold text-white text-6xl px-2">
        Change the way you money
      </Text>
      <Text className="absolute bottom-32 font-semibold text-white text-lg px-2">
        For those who want more from their money.Experience banking at your
        fingertips like never before. Join us today and unlock a world of
        financial freedom right from your smartphone.
      </Text>
      <View className="absolute bottom-12 self-center">
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View 
            style={{
              width: width*0.95,
              height: 50,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <Text className='text-xl text-black font-bold'>Join now</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Intro;
