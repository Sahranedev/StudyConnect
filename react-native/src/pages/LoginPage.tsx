import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootDrawerParamList } from "../../src/types/types";
import { useCurrentUserContext } from "../context/userContext";
import { ScrollView } from "react-native-gesture-handler";
import { UserType } from "../types/types";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

type Props = NativeStackScreenProps<RootDrawerParamList, "LoginPage">;

export default function LoginPage({ navigation }: Props) {
  const { setUser } = useCurrentUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) {
      setErrorMessage("Please specify email and password");
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    try {
      const response = await fetch(`${apiUrl}/api/login`, requestOptions);
      const result = await response.json();

      if (result.token && result.user) {
        console.log("data du user :", result.user);
        await SecureStore.setItemAsync("userToken", result.token);

        setUser(result.user);
      } else {
        setErrorMessage("Authentication failed");
      }
    } catch (error) {
      setErrorMessage("An error occurred");
    }
  };

  return (
    <SafeAreaView className="bg-blue-900 min-h-full">
      <View className="flex justify-center items-center pt-12">
        <Image
          source={require("../../assets/CodeLingoLogo.png")}
          className="w-48 h-48"
          resizeMode="contain"
        />
      </View>
      <View className="flex flex-col justify-center items-center text-xl text-white ">
        <Text className="text-white text-2xl mb-6">Se Connecter</Text>
        <View className="w-80">
          <TextInput
            placeholder="Adresse Email"
            placeholderTextColor="#9ca3af"
            className="bg-white rounded-lg text-lg p-4 mb-4"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Mot de passe"
            placeholderTextColor="#9ca3af"
            secureTextEntry
            className="bg-white rounded-lg text-lg p-4 mb-4"
            value={password}
            onChangeText={setPassword}
          />
          <View className="flex items-center">
            <TouchableOpacity
              onPress={handleSubmit}
              className="bg-black w-64 rounded-full py-3 items-center"
            >
              <Text className="text-white text-xl">Connexion</Text>
            </TouchableOpacity>
          </View>
        </View>
        {errorMessage ? (
          <Text className="text-red-600 text-sm mt-4">{errorMessage}</Text>
        ) : null}
      </View>
      <TouchableOpacity>
        <Text className="text-white underline mt-6 text-center">
          Mot de passe oublié ?
        </Text>
      </TouchableOpacity>
      <View className="flex justify-center items-center mt-8">
        <View className="w-80 border-t border-gray-300" />
      </View>
      <Text className="text-white font-bold text-2xl text-center mt-4">
        Nouveau Membre
      </Text>
      <Text className="text-center mt-2 text-white">
        Vous êtes nouveau membre ?
      </Text>
      <Text className="text-center text-white">
        Créer votre espace membre pour accéder à toute l'application
      </Text>
      <View className="flex items-center justify-center">
        <TouchableOpacity className="mt-4 mb-8">
          <View className="w-64 h-14 rounded-full border-4 border-black bg-white flex items-center justify-center">
            <Text className="text-black text-xl text-center">S'inscrire</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View className="">
        <Text className="text-white text-center">Code-Lingo.fr</Text>
        <Text className="text-white text-center">Mention Légal/FAQ</Text>
      </View>
    </SafeAreaView>
  );
}
