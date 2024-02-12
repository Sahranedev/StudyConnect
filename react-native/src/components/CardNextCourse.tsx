import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";

import { Course } from "../interfaces/Courses";

interface NextCardCourseComponentProps {
  nextcourse: Course;
}

const CardNextCourse: React.FC<NextCardCourseComponentProps> = ({
  nextcourse,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/CodeLingoLogo.png")}
            style={styles.avatar}
          />
          <Text style={styles.teacherName}>
            {nextcourse.teachers.user.firstname}{" "}
            {nextcourse.teachers.user.lastname}
          </Text>
        </View>
        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Entypo size={20} color="white" />
            <Text style={styles.detailText}>
              {nextcourse.veryShortFormattedDate}
            </Text>
          </View>
          <View style={styles.detailItem}>
            <AntDesign name="clockcircleo" size={24} color="black" />
            <Text style={styles.detailText}>
              {nextcourse.formattedStartTime}-{nextcourse.formattedEndTime}
            </Text>
          </View>
          <View style={styles.detailItem}>
            <AntDesign name="tago" size={24} color="black" />
            <Text style={styles.detailText}>{nextcourse.name}</Text>
          </View>
        </View>
        <Text style={styles.courseDescription}>
          {nextcourse.name}, {nextcourse.description}.
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.notifyButton}>
            <View style={styles.buttonContent}>
              <AntDesign name="bells" size={24} color="black" />{" "}
              <Text style={styles.buttonText}>Être notifié</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.enrollmentActions}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginBottom: 24,
  },
  card: {
    height: 176,
    width: "100%",
    backgroundColor: "darkGrey",
    borderRadius: 20,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  teacherName: {
    fontSize: 20,
    color: "white",
    marginLeft: 8,
  },
  details: {
    flexDirection: "row",
    marginTop: 12,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  detailText: {
    marginLeft: 8,
    fontSize: 14,
    color: "white",
  },
  courseDescription: {
    color: "white",
    fontSize: 12,
    marginTop: 12,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  notifyButton: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    marginLeft: 4,
  },
  enrollmentActions: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CardNextCourse;
