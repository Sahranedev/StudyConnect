import { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import type { RootDrawerParamList } from "../types/types"

import { Ionicons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";


import { useUser } from "../context/userContext";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";


const Stack = createStackNavigator<RootDrawerParamList>();

const generateScreenOptions = ({ navigation }) => ({
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
    const { user } = useUser();

  useEffect(() => {
    const fetchDataToken = async () => {
      const data = await SecureStore.getItemAsync("userToken");
        if (data !== null) {
            setDataToken(JSON.parse(data));
        }
    };
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
        {!dataToken?.token ? (
          <>
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
    
        
          </>
        ) : (
          <>
            <Stack.Group>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
            
            </Stack.Group>
            

          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
