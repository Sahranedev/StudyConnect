import React, {  useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootDrawerParamList } from "../../src/types/types";
import { useUser } from '../context/userContext';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

type Props = NativeStackScreenProps<RootDrawerParamList, 'LoginPage'>;

export default function LoginPage({ navigation }: Props) {
  const { setUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
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

    if (email && password) {
      fetch(`${apiUrl}/api/login`, requestOptions)
        .then((response) => response.json())
        .then(async (result) => {
          console.log("data du user :", result.user)
          if (result.token && result.user) {
            await SecureStore.setItemAsync('userToken', result.token);
            setUser(result.user);
            navigation.navigate("Main", { screen: 'Home' });
          } else {
            setErrorMessage("Authentication failed");
          }
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage("An error occurred");
        });
    } else {
      setErrorMessage("Please specify email and password");
    }
  };

  return (
    <View className='flex-1 items-center px-5 bg-cyan-600 '>
      <View className='flex justify-center items-center mt-44 mb-12'>
      <Text className="text-white  text-4xl mb-5">
        Code Lingo
        </Text>
        <Image source={require('../../assets/CodeLingoLogo.png')} className='h-32 w-48'/>

      </View>

    <View className=" justify-center">
    
  <TextInput
    placeholder="Adresse mail"
    value={email}
    onChangeText={setEmail}
    className="h-12 w-80 bg-white border border-slate-400 rounded-md mb-5 pl-2"
    />
  <TextInput
    placeholder="Mot de passe"
    value={password}
    onChangeText={setPassword}
    secureTextEntry={true}
    className="h-12 w-80 bg-white border border-slate-400 rounded-md mb-5 pl-2"
    />
  <TouchableOpacity className=" flex justify-center h-10 w-80  rounded-md mb-5 pl-2 bg-blue-800" onPress={handleSubmit}>
    <Text className="text-white text-center text-xl">
      Se Connecter
    </Text>
  </TouchableOpacity>
</View>
    </View>
  );
};

