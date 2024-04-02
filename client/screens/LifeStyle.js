import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Top from "../components/Top";
import Row from "../components/Row";
const LifeStyle = () => {
  return (
    <SafeAreaView className=" flex-1 bg-black">
      <Top />
      <Row />
    </SafeAreaView>
  );
};

export default LifeStyle;
