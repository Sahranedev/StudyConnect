import 'react-native-gesture-handler';
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./src/components/Home";
import About from "./src/components/About";
import Contact from "./src/components/Contactscreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import  *  as Icon from '@expo/vector-icons';

export type RootDrawerParamList = {
  Home: undefined;
  About: undefined;
  Contact: { sort: 'latest' | 'top' } | undefined;
};


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator<RootDrawerParamList>();

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function App() {
  return (
    <NavigationContainer>
     <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'information-circle' : "information-circle-outline";
            }
            else if (route.name === 'Contact') {
              iconName = focused ? 'people' : "people-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}   
      >
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen
          name="About"
          component={About}
           
        />
        <Tab.Screen name="Contact" component={Contact}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
 