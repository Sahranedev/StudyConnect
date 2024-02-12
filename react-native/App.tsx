import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/pages/LoginPage";
import type { RootDrawerParamList } from "./src/types/types";
import { CurrentUserContextProvider} from "./src/context/userContext";
import Toast from "react-native-toast-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomNav from "./src/components/NavBar/BottomNav";
import Root from "./src/nav/Root";

const Stack = createNativeStackNavigator<RootDrawerParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CurrentUserContextProvider>
        <Root />
      </CurrentUserContextProvider>
      <Toast />
    </GestureHandlerRootView>
  );
}
