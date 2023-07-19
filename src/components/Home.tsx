import React from "react";
import { Button, View, Text } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootDrawerParamList } from "../../App";

 type Props = NativeStackScreenProps<RootDrawerParamList, 'Home'>;

export default function Home({ navigation } : Props) {
  return (
    <View >
      <Text>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}