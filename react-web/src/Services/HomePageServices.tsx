import { useCurrentUserContext } from "@/context/UserContext";
import { useState } from "react";
import { Course, ApiResponse } from "../interfaces/Courses";





export const fetchStudentCourses = async (studentId: number, 
    setCourses: (courses: Course[]) => void,
    setHasCourses: (hasCourses: boolean) => void
  ): Promise<void> => {
    try {
      const res = await fetch(`http://localhost:5000/api/courses/today/students/${user.student_id}`, {
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

  export const fetchNextCourses = async (
    studentId: number, 
    setNextCourses: (courses: Course[]) => void,
    setAvailableNextCourses: (available: boolean) => void
  ): Promise<void> => {
   

    try {
      const res = await fetch(`http://localhost:5000/api/next-7-days-courses/students/${user.student_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data: ApiResponse = await res.json()

      if (data.available === false) {
        setNextCourses([]);
        setAvailableNextCourses(false);
      } else {
        setNextCourses(data.courses);
        setAvailableNextCourses(true);
      }

     
    } catch (error) {

    }
  }


  export const handleCourseEnrollements = async (
    courseId: number, 
    enrollmentData: Object,
    setNextCourses: (courses: Course[]) => void
  ): Promise<void> => {
    const updatedEnrollement = {
      ...dataEnrollement,
      course_id: courseId
    };
    
    setDataEnrollement(updatedEnrollement);
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify(updatedEnrollement);
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    }
    
    try {
      const response = await fetch("http://localhost:5000/api/enrollments", requestOptions);
      const repSuccessfull = await response.json();
      
      if (!response.ok) {
        console.log("Inscription ratée");
      } else {
        setNextCourses(prevCourses => prevCourses.map(course => {
          if (course.id === courseId) {
            return { 
              ...course, 
              isEnrolled: true,
              enrollmentId: repSuccessfull.data.id 
            };
          }
          return course;
        }));
        console.log(repSuccessfull.message, repSuccessfull.data);
      }
      
    } catch (error) {
      console.error(error);
    }
  }
  
  export const handleDeleteCourseEnrollement = async (enrollementId: number, courseId: number) => {

    try {
      const response = await fetch(`http://localhost:5000/api/enrollments/${enrollementId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
        });
      
      if (response.ok) {

        setNextCourses(prevCourses =>
          prevCourses.map(course =>
            course.id === courseId ? { ...course, isEnrolled: false } : course
          )
        );
        console.log("vous vous êtes bien désinscris du cours")
      } else {
        console.log("Une erreur a eu lieu lors de la tentative de désinscription")
      }
      
      
    } catch (error) {

      console.error(error)
    }


  }