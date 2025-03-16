import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

// Import real screen components
import HomePage from './HomePage';
import ReportWaste from './ReportWaste';
import CollectWaste from './CollectWaste';  
import Reward from './Reward';
import LeaderBoard from './LeaderBoard';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          headerStyle: { backgroundColor: '#4CAF50' },
          headerTintColor: '#fff',
          drawerStyle: { backgroundColor: '#f0f0f0', width: 240 },
          drawerActiveTintColor: '#4CAF50',
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomePage}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Report Waste Location"
          component={ReportWaste}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="location-on" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Collect Waste"
          component={CollectWaste}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="trash-alt" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Reward"
          component={Reward}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="card-giftcard" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="LeaderBoard"
          component={LeaderBoard}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="leaderboard" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
