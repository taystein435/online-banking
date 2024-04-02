import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import { Image } from "expo-image";
const { width, height } = Dimensions.get("window");
const data = [
  {
    id: "4",
    color: "#1b1c6d",
    title: "£5000",
    sub_title: "Savings",
    image:
      "https://cdn.freebiesupply.com/images/large/2x/mastercard-logo-png-transparent.png",
  },
  {
    id: "1",
    color: "#d49db8",
    title: "£2000",
    sub_title: "Current",
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/visa-logo-png-transparent.png",
  },
  {
    id: "2",
    color: "grey",
    title: "£50",
    sub_title: "Shares & Stock",
      image:
      "https://cdn.freebiesupply.com/images/large/2x/mastercard-logo-png-transparent.png",
  },
  
];
const HomeCard = () => {
  return (
    <View>
      <FlatList
        horizontal
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <View className=" mt-5">
            <View
              style={{
                backgroundColor: item.color,
                height: height * 0.25,
                width: width * 0.94,
                margin: 5,
                borderRadius: 10,
              }}
            >
              <Image
                style={{
                  height: 50,
                  width: 50,
                  display: "flex",
                  alignSelf: "flex-end",
                }}
                source={item.image}
                contentFit="contain"
                transition={1000}
              />
              <View
                style={{

                  alignItems: "center",
                  justifyContent: "center",
                  
                }}
              >
                <Text className="font-semibold text-white text-lg px-4">
                  {item.sub_title}
                </Text>
                <Text className=" font-bold text-white text-5xl px-4">
                  {item.title}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default HomeCard;
