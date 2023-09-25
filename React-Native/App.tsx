import 'react-native-gesture-handler';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./src/pages/Home";
import MesCours from "./src/components/MesCours";
import Contact from "./src/components/Contactscreen";
import LoginPage from "./src/pages/LoginPage";
import Ionicons from 'react-native-vector-icons/Ionicons';
import type { RootDrawerParamList } from "./src/types/types";
import { UserProvider } from './src/context/userContext'; 
import Toast from 'react-native-toast-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator<RootDrawerParamList>();
const Tab = createBottomTabNavigator<RootDrawerParamList>();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'MesCours') { 
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'people' : 'people-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MesCours" component={MesCours} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
      </NavigationContainer>
      </UserProvider>
      <Toast />
      </GestureHandlerRootView>
  );
}
