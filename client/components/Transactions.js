import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import { Image } from "expo-image";
const { width, height } = Dimensions.get("window");
const data = [
  {
    id: "5",
    image: "https://cdn.freebiesupply.com/logos/thumbs/2x/apple-logo.png",
    title: "Apple",
    amount: 300,
    desc: "Shopping",
  },

  {
    id: "1",
    image: "https://cdn.freebiesupply.com/logos/thumbs/2x/adidas1-logo.png",
    title: "Adidas",
    amount: 300,
    desc: "Shopping",
  },
  {
    id: "2",
    image: "https://cdn.freebiesupply.com/logos/thumbs/2x/netflix-2-logo.png",
    title: "Netflix",
    amount: 150,
    desc: "Subscription",
  },

  {
    id: "3",
    image:
      "https://cdn.freebiesupply.com/images/thumbs/2x/hellofresh-logo-thumb.png",
    title: "Hello Fresh",
    amount: 120,
    desc: "Shopping",
  },
  {
    id: "4",
    image:
      "https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png",
    title: "Amazon",
    amount: 500,
    desc: "Subscrription",
  },
];
const Transactions = () => {
  return (
    <View>
      <Text className="font-bold text-white text-3xl px-4 py-4">
        Latest Transactions
      </Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  height: 60,
                  width: 60,
                  alignSelf: "center",
                }}
                source={item.image}
                contentFit="contain"
                transition={1000}
              />
              <View style={{ marginLeft: 40 }}>
                <Text className="font-bold text-white text-lg">
                  {item.title}
                </Text>
                <Text className="font-semibold text-white text-sm">
                  {item.desc}
                </Text>
              </View>
            </View>
            <View>
              <Text className="font-semibold text-white text-lg px-4 mt-4">
                £{item.amount}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Transactions;
