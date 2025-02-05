import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StaffTimeTable from "./StaffTimeTable";  


const Stack = createStackNavigator();

export default function LocationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="StaffTimeTable" 
        component={StaffTimeTable} 
        options={{ headerShown: false }}  
      />
      
    </Stack.Navigator>
  );
}
