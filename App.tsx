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
const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} options={{
          title: "Home",
          drawerIcon: ({ focused, color, size }) => (
            <Icon.Feather name="home" size={20} color="black" />
        )}} />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            title: 'About',
            drawerIcon: ({ focused, color, size }) => (  
              <Ionicons name={focused ? "information-circle" : "information-circle-outline"} size={size} color={color} />
            ),
          }} 
        />
        <Drawer.Screen name="Contact" component={Contact} options={{
          title: "Contact",
          drawerIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? "people-outline" : "people-outline"} size={size} color={color} />
        )}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
 