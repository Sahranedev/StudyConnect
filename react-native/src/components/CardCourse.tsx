import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Course } from '../interfaces/Courses';

interface CourseComponentProps {
  course: Course;
}

const CardCourse: React.FC<CourseComponentProps> = ({ course }) => {
  console.log("course", course);
  return (
    <View style={style.box}>
      <Image source={require("../../assets/bmw-serie-4-coupe-14.jpg")} style={style.image} />
      <View style={style.footer}>
        <Text style={style.courseName}>{course.name}</Text>
        <Text>{course.description}</Text>

      </View>
    </View>
  );
}

export default CardCourse;

const style = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    height: 150,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
  footer: {
    width: '100%',
    height: '30%',
    backgroundColor: "gray",
    marginBottom: 30,
  
  },
  courseName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "white",
    textAlign: "center",
  },

  
});
