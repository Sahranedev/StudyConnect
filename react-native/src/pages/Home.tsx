import React, { useEffect, useState } from "react";
import { Button, View, Text, StyleSheet, FlatList } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import type { RootDrawerParamList } from "../../src/types/types";
import {  TextInput } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardCourse from "../components/CardCourse";
import { useUser } from '../context/userContext';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;


type Props = NativeStackScreenProps<RootDrawerParamList, 'Home'>;

export default function Home({ navigation }: Props) {
  const { user } = useUser();
  console.log(user);
  const [courses, setCourses] = useState([])
  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      alignItems: "center",
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: 'lightgrey',
      borderRadius: 7,
      paddingLeft: 10,
      paddingRight: 10,
    },
    input: {
      width: 300,
      height: 50,
      fontSize: 20,
      fontStyle: 'italic',
    },
    icon: {
      marginLeft: 10,
    },
    imageMap: {
      width: 300,
      height: 300,
    },
  
  });

 
  const fetchCourses = () => {
    fetch(`${apiUrl}/api/courses`)
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch(console.error);
  };
  useFocusEffect(
    React.useCallback(() => {
      fetchCourses();
    }, [])
  );
  
  type Course = {
    id: number;
    name: string;
    language: string;
    description: string;
    professor_id: number;
    
  };

  const renderItem = ({ item }: { item: Course }) => {
    return <CardCourse course={item} />;
  };

  const headerComponent = () => {
    return (
      <View>
        <Text>Bonjour {user ? user.firstname : "Guest"}</Text>
        <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Search your course" />
        <Ionicons name="search" size={30} color="black" style={styles.icon} />
      </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={headerComponent}
        data={courses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title="Voir mes cours"
        onPress={() => navigation.navigate("MesCours")}
      />
    </View>
  );
}
