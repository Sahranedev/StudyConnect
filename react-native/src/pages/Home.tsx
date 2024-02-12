import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootDrawerParamList } from "../../src/types/types";
import { ApiResponse, Course } from "../interfaces/Courses";
import CardCourse from "../components/CardCourse";
import DateAfficheur from "../components/DateAfficheur";
import CardNotCourse from "../components/CardNotCourse";
import { useCurrentUserContext } from "../context/userContext";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CardNextCourse from "../components/CardNextCourse";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;


type Props = NativeStackScreenProps<RootDrawerParamList, 'Home'>;

export default function Home() {
  const { user } = useCurrentUserContext();
  const [isLoading, setIsLoading] = useState(true); 

  const [courses, setCourses] = useState<Course[]>([]);
  const [hasCourses, setHasCourses] = useState(true);

  const [nextCourses, setNextCourses] = useState<Course[]>([]);
  const [availableNextCourses, setAvailableNextCourses] = useState(true)

  const [dataEnrollement, setDataEnrollement] = useState<Object>({
    student_id: user?.student_id,
    course_id:  null
  })

 
console.log(" 1 user.student_id:", user?.student_id);



  const fetchStudentCourses = async () => {
  console.log(" 2 user.student_id dans fetchStudentCourses", user?.student_id);
  try {
    const res = await fetch(`${apiUrl}/api/courses/today/students/${user?.student_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: ApiResponse = await res.json();

    if (data.hasCourse === false) {
      setHasCourses(false);
      setCourses([]);
    } else {
      setCourses(data.courses);
      setHasCourses(true);
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des cours", error);
  }
};

  const fetchNextCourses = async () => {
    console.log(" 3 user.student_id dans fetchNextCourses", user?.student_id);

  try {
    const res = await fetch(`${apiUrl}/api/next-7-days-courses/students/${user?.student_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    const data: ApiResponse = await res.json();
    console.log("data dans fetchNextCourses", data);

    if (data.available === false) {
      setNextCourses([]);
      setAvailableNextCourses(false);
    } else {
      setNextCourses(data.courses);
      setAvailableNextCourses(true);
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des prochains cours", error);
  }
};


  
  
useEffect(() => {
  if (!user) {
    setIsLoading(false);
    return;
  }

  async function fetchData() {
    setIsLoading(true);
    await fetchStudentCourses();
    await fetchNextCourses();
    setIsLoading(false);
  }

  fetchData();
}, [user]); 


return (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <Image source={require("../../assets/CodeLingoLogo.png")} style={styles.logo}/>
        <Text style={styles.userName}>
          {user?.firstname} {user?.lastname}
        </Text>
      </View>
      <View style={styles.icons}>
        <AntDesign name="bells" size={24} color="black" />
        <MaterialIcons name="message" size={24} color="black" />
      </View>
    </View>
    <DateAfficheur />

    <Text style={styles.sectionTitle}>
      Mes cours de la journée 
    </Text>
    {hasCourses ? (
      courses.map((course) => (
        <CardCourse
          key={course.id}
          course={course}
        />
      ))
    ) : (
      <CardNotCourse />
    )}
    <Text style={styles.sectionTitle}>
      Cours à venir
    </Text>
   
      <Text>
        Aucun cours à venir
      </Text>
  
   
  </View>
);
}

const styles = StyleSheet.create({
container: {
},
header: {
  marginTop: 6,
  flexDirection: 'row',
  justifyContent: 'space-between',
},
userInfo: {
  marginLeft: 6,
  flexDirection: 'row',
  alignItems: 'center',
  margin: 6,
  
},
logo: {
  height: 48, 
  width: 48, 
  borderRadius: 24, 
},
userName: {
  color: '#2B2B2B',
  fontWeight: 'bold',
  fontSize: 20, 
  alignItems: 'center', 
},
icons: {
  flexDirection: 'row',
  alignItems: 'center',
  marginRight: 6,
  gap: 2, 
},
sectionTitle: {
  color: '#2B2B2B',
  marginLeft: 7,
  marginTop: 3,
  marginBottom: 2,
  fontSize: 20,
  fontWeight: 'bold',
},
});
