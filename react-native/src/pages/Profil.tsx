import React from 'react';
import { Button, View, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';
import { useCurrentUserContext } from '../context/userContext'; 
const Profile = () => {
  const { setUser } = useCurrentUserContext(); 
  const navigation = useNavigation();

  const handleLogOut = async () => {
    await SecureStore.deleteItemAsync('userToken'); 
    setUser(null);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
      <Button title="SE DECONNECTER" onPress={handleLogOut} />
    </View>
  );
};

export default Profile;
