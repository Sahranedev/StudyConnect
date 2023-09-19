import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CardCourse = ({ course }: any) => {
    const styles = StyleSheet.create({
        courseContainer: {
            backgroundColor: '#F9FAFC',
            height: 'auto',
            width: 350,
            marginTop: 20,
            borderRadius: 4,
            paddingLeft: 10,
            paddingRight: 5,
        },
        titre: {
            fontSize: 20,
            color: "blue",
            fontWeight: 'bold',
            marginBottom: 5,
            
        },
        langage: {
            fontSize: 15,
            color: "grey",
        },
        description: {
            fontSize: 15,
            color: "grey",
        },
    });
  return (
      <View>
         
              <View style={styles.courseContainer}>
                <Text style={styles.titre}>{course.name}</Text>
              <Text style={styles.langage}>langage : {course.language} </Text>
              <Text style={styles.description}>Description : Nous allons voir les fonctions dans les requêtes sql</Text>
              <Text style={styles.description}>Dispensé par : {course.firstname} {course.lastname} </Text>
              
      </View>
    </View>
  )
}

export default CardCourse