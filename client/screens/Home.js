import { SafeAreaView, FlatList } from "react-native";
import React from "react";
import Top from "../components/Top";
import HomeCard from "../components/HomeCard";
import Transactions from "../components/Transactions";

const Home = () => {
  const data = [
    { id: "1", component: <HomeCard /> },
    { id: "2", component: <Transactions /> },
  ];

  return (
    <SafeAreaView className="flex-1 bg-black">
      <Top />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => item.component}
      />
    </SafeAreaView>
  );
};

export default Home;
