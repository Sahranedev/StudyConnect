import 'react-native-gesture-handler';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./src/pages/Home";
import MesCours from "./src/components/MesCours";
import Contact from "./src/components/Contactscreen";
import LoginPage from "./src/pages/LoginPage";
import type { RootDrawerParamList } from "./src/types/types";
import { UserProvider } from './src/context/userContext'; 
import Toast from 'react-native-toast-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomNav from './src/components/NavBar/BottomNav';

const Stack = createNativeStackNavigator<RootDrawerParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="BottomNav" component={BottomNav} />
      </Stack.Navigator>
      </NavigationContainer>
      </UserProvider>
      <Toast />
      </GestureHandlerRootView>
  );
}
