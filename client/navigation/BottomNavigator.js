import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";
import Invest from "../screens/Invest";
import Transfers from "../screens/Transfers";
import Crypto from "../screens/Crypto";
import LifeStyle from "../screens/LifeStyle";

const Tab = createBottomTabNavigator();

const BottomNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "grey",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "black", 
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bank" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Invest"
        component={Invest}
        options={{
          tabBarLabel: "Invest",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="money-check" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Transfers"
        component={Transfers}
        options={{
          tabBarLabel: "Transfers",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="money-bill-transfer" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Crypto"
        component={Crypto}
        options={{
          tabBarLabel: "Crypto",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bitcoin" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="LifeStyle"
        component={LifeStyle}
        options={{
          tabBarLabel: "LifeStyle",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="holiday-village" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
