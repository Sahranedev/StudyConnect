import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { useUser } from '../context/userContext';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootDrawerParamList } from "../types/types";

type Props = NativeStackScreenProps<RootDrawerParamList, 'MesCours'>;

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default function MesCours({ navigation }: Props) {
  const { user } = useUser();
  const [course, setCourse] = useState({
    name: '',
    language: '',
    description: '',
    user_id: user?.id,
  });

  const resetState = () => {
    setCourse({
      name: '',
      language: '',
      description: '',
      user_id: user?.id,
    });
  };

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Le cours a bien été déclaré',
    });
  };

  const handleInputChange = (name: string, value: string) => {
    setCourse({
      ...course,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const body = JSON.stringify(course);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body,
    };

    if (course.name && course.description && course.language) {
      fetch(`${apiUrl}/api/courses`, requestOptions)
        .then((response) => {
          if (response.status !== 201) {
            Toast.show({
              type: 'error',
              text1: 'Le cours n\'a pas pu être déclaré',
              text2: 'Veuillez vérifier les informations saisies',
            });
          }
          return response.text();
        })
        .then(() => {
          showToast();
          setTimeout(() => {
            navigation.navigate('Home');
          }, 1000);
          resetState();

        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <View style={styles.container}>
      <Text>Déclarer un nouveau cours</Text>
      <TextInput
        placeholder='Nom du cours'
        value={course.name}
        onChangeText={(text) => handleInputChange('name', text)}
        style={styles.input}
      />
      <TextInput
        placeholder='Langage'
        value={course.language}
        onChangeText={(text) => handleInputChange('language', text)}
        style={styles.input}
      />
      <TextInput
        placeholder='Description'
        value={course.description}
        onChangeText={(text) => handleInputChange('description', text)}
        style={styles.input}
        multiline
      />
      <View style={styles.buttonContainer}>
        <Button title='Déclarer le cours' onPress={handleSubmit} />
        <Button title='Annuler' />
      </View>
    </View>
  );
}
