import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../pages/Home";
import MesCours from "../MesCours";
import Profil from "../../pages/Profil";
import LoginPage from "../../pages/LoginPage";
import Ionicons from "react-native-vector-icons/Ionicons";
import type { RootDrawerParamList } from "../../types/types";

const Tab = createBottomTabNavigator<RootDrawerParamList>();

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "MesCours") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          } else if (route.name === "Profil") {
            iconName = focused ? "people" : "people-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MesCours" component={MesCours} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
}
