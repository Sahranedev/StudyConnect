import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardNotCourse = () => {
  return (
    <View >
      <View style={styles.card}>
        <Text style={styles.title}>
          Aucun cours prévu aujourd'hui
        </Text>
        <Text style={styles.subtitle}>
          Vous pouvez consulter votre emploi du temps pour vous inscrire à un cours ou bien consulter les cours que vous avez déjà suivis.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  card: {
    height: 176, 
    width: 320, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, 
    border: "solid ",
    borderColor: "black",
  },
  title: {
    fontSize: 18, 
    textAlign: 'center',
    marginBottom: 10, 
  },
  subtitle: {
    fontSize: 14, 
    textAlign: 'center',
    paddingHorizontal: 10, 
  },
});

export default CardNotCourse;
