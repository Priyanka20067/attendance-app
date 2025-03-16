import 'react-native-reanimated'; // 👈 Must be first import
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Start from './src/Screen/start';
import Login from './src/Screen/Login';
import SignUp from './src/Screen/SignUp';
import Dashboard from './src/Screen/Dashboard';
import HomePage from './src/Screen/HomePage';
import CollectWaste from './src/Screen/CollectWaste';
import ReportWaste from './src/Screen/ReportWaste';
import Reward from './src/Screen/Reward';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="CollectWaste" component={CollectWaste} />
          <Stack.Screen name="ReportWaste" component={ReportWaste} />
          <Stack.Screen name="Reward" component={Reward} />
          

        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
