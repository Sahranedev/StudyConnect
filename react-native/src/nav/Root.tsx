import { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import type { RootDrawerParamList } from "../types/types";

import { Ionicons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

import { useCurrentUserContext } from "../context/userContext";
import LoginPage from "../pages/LoginPage";
import BottomNav from "../components/NavBar/BottomNav";
import RegisterPage from "../pages/RegisterPage";

const Stack = createStackNavigator<RootDrawerParamList>();

const generateScreenOptions = ({ navigation }: any) => ({
  headerLeft: () => (
    <Pressable onPress={navigation.goBack}>
      <Ionicons
        name="arrow-back"
        size={26}
        color="black"
        style={{ marginLeft: 40 }}
      />
    </Pressable>
  ),
  headerTitle: "",
});

export default function Root() {
  const [dataToken, setDataToken] = useState<string | null>(null);
  const { user } = useCurrentUserContext();

  const fetchDataToken = async () => {
    try {
      const token = await SecureStore.getItemAsync("userToken");
      setDataToken(token);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération du token utilisateur :",
        error
      );
    }
  };

  useEffect(() => {
    fetchDataToken();
  }, [user]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            borderBottomWidth: 0,
            shadowOpacity: 0,
            elevation: 0,
          },
        }}
      >
        {!dataToken ? (
          <>
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterPage"
              component={RegisterPage}
              options={generateScreenOptions}
            />
          </>
        ) : (
          <>
            <Stack.Group>
              <Stack.Screen
                name="BottomNav"
                component={BottomNav}
                options={{ headerShown: false }}
              />
            </Stack.Group>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
