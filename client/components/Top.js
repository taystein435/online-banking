import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Searchbar } from "react-native-paper";
const { width, height } = Dimensions.get("window");
const Top = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Feather name="camera" size={24} color="grey" style={{}} />
      <Searchbar
       // placeholder="Search"
        placeholderTextColor={"white"}
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{
          width: width * 0.65,
          height: 43,
          backgroundColor: "transparent",
          borderColor: "grey",
          borderWidth: 1,
        }}
      />
      <AntDesign name="creditcard" size={24} color="grey" />
      <Entypo name="bar-graph" size={24} color="grey" />
    </View>
  );
};

export default Top;
