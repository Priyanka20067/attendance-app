import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstStack from "./src/FirstStack"; 
import WelcomePage from "./src/Welcomepage";
import Selection from "./src/Selection";
import Signin from "./src/Signin";
import Home from "./src/Home";
import Staff from "./src/staff";
import Hod from "./src/Hod"
import Profile from "./src/Profile";
import StaffAttendance from "./src/StaffAttendance";
import StdTimeTable from "./src/StdTimeTable";
import StdAttendance from "./src/StdAttendance";
import Leave from "./src/Leave";
import StaffTimeTable from "./src/StaffTimeTable";
import Approveleave from "./src/Approveleave";
import ComplaintView from "./src/ComplaintView";
import Post from "./src/Post";
import Announcement from "./src/Announcement";
import Complaine from "./src/Complaine";
import AddPost from "./src/AddPost";
import InternalMark from "./src/InternalMark";
import ViewStatus from "./src/ViewStatus";
import StaffInternal from "./src/StaffInternal";
import Leaveod from "./src/Leaveod";
import StaffPost from "./src/StaffPost";
import HodAnnouncement from "./src/HodAnnouncement";
import UpdateAnnouncement from "./src/UpdateAnnouncement";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstStack">
        <Stack.Screen
          name="FirstStack" 
          component={FirstStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomePage" 
          component={WelcomePage}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Selection" 
          component={Selection}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin" 
          component={Signin}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Home" 
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Staff" 
          component={Staff}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Hod" 
          component={Hod}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile" 
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StaffAttendance" 
          component={StaffAttendance}
          options={{ headerShown: false }}
        />
       <Stack.Screen
          name="StdTimeTable" 
          component={StdTimeTable}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StdAttendance" 
          component={StdAttendance}
          options={{ headerShown: false }}
        />  
         <Stack.Screen
          name="Leave" 
          component={Leave}
          options={{ headerShown: false }}
        /> 
         <Stack.Screen
          name="StaffTimeTable" 
          component={StaffTimeTable}
          options={{ headerShown: false }}
          />
         <Stack.Screen
          name="Approveleave" 
          component={Approveleave}
          options={{ headerShown: false }}
        />   
         <Stack.Screen
          name="ComplaintView" 
          component={ComplaintView}
          options={{ headerShown: false }}
        />   
        
        <Stack.Screen
          name="Post" 
          component={Post}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="Announcement" 
          component={Announcement}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Complaine" 
          component={Complaine}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="AddPost" 
          component={AddPost}
          options={{ headerShown: false }}
        /> 
         <Stack.Screen
          name="InternalMark" 
          component={InternalMark}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="ViewStatus" 
          component={ViewStatus}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="StaffInternal" 
          component={StaffInternal}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="Leaveod" 
          component={Leaveod}
          options={{ headerShown: false }}
        /> 
         <Stack.Screen
          name="StaffPost" 
          component={StaffPost}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen
          name="HodAnnouncement" 
          component={HodAnnouncement}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UpdateAnnouncement" 
          component={UpdateAnnouncement}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
