import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FirstPage from "./Firstpage";

const Stack = createStackNavigator();

export default function LocationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="FirstPage" 
        component={FirstPage} 
        options={{ headerShown: false }}  
      />
     
    </Stack.Navigator>
  );
}
