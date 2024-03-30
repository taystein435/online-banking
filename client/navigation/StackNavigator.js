import Home from "../screens/Home";
import Intro from "../screens/Intro";
import Login from "../screens/Login";
import BottomNavigator from "./BottomNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={BottomNavigator}
        options={{
          headerShown: false,
          
        }}
      />
    </Stack.Navigator>
  );
}

