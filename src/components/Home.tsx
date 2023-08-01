import React from "react";
import { Button, View, Text, StyleSheet, Image } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootDrawerParamList } from "../../App";
import { TextInput } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = NativeStackScreenProps<RootDrawerParamList, 'Home'>;

export default function Home({ navigation }: Props) {
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

  const scrollImage = [
    { image: require("../../assets/Frame-26.png") },
    { image: require("../../assets/Frame-26.png") },
    { image: require("../../assets/Frame-26.png") },
    { image: require("../../assets/Frame-26.png") },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter your name" />
        <Ionicons name="search" size={30} color="black" style={styles.icon} />
      </View>
      <View>
        {scrollImage.map((item, index) => {
          return (
            <View key={index}>
              <Image source={item.image} />
            </View>
          );
        })}
      </View>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}
