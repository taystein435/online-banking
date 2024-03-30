import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");
const Login = ({navigation}) => {
  const [text, setText] = useState("");

  return (
    <SafeAreaView className=' flex-1 justify-center'>
      <Text className='text-center text-3xl font-bold'>Welcome</Text>
      <TextInput
        mode="outlined"
        activeOutlineColor="black"
        outlineColor="black"
        style={{marginTop:10 ,width:width*0.98, alignSelf: "center",}}
        label="Username"
        placeholder="Enter your Username"
        right={<TextInput.Affix text="/100" />}
      />
      <TextInput
        mode="outlined"
        label="Password"
        outlineColor="black"
        activeOutlineColor="black"
        style={{marginTop:10 ,width:width*0.98, alignSelf: "center",}}
        placeholder="Enter your Password"
        right={<TextInput.Affix text="/100" />}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View
          style={{
            width: width * 0.95,
            marginTop:30,
            height: 50,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            borderRadius: 5,
          }}
        >
          <Text className="text-xl text-white font-bold">Log in</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
