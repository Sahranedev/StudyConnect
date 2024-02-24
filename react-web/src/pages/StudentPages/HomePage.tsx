import { useCurrentUserContext } from "@/context/UserContext";

import DateAfficheur from "@/comps/DateAfficheur";
import SearchBar from "@/comps/SearchBar";
import CardCourse from "../../comps/Course/CardCourse";
import CardNextCourse from "@/comps/Course/CardNextCourse";
import CardNotCourse from "@/comps/Course/CardNotCourse";
import { useEffect, useState } from "react";
import { Course, ApiResponse } from "../../interfaces/Courses";
import { toast, Zoom } from "react-toastify";
import Header from "@/comps/Header";

const HomePage = () => {
  const { user } = useCurrentUserContext();
  const [courses, setCourses] = useState<Course[]>([]);
  const [hasCourses, setHasCourses] = useState(true);

  const [nextCourses, setNextCourses] = useState<Course[]>([]);
  const [availableNextCourses, setAvailableNextCourses] = useState(true);

  const [dataEnrollement, setDataEnrollement] = useState<Object>({
    student_id: user.student_id,
    course_id: null,
  });
  const toastSuccesEnrollement = () => {
    toast.success("Bien inscrit au cours", {
      transition: Zoom,
      autoClose: 2000,
    });
  };

  const toastSuccesDeleteEnrollement = () => {
    toast.warning("Vous vous êtes désinscrit du cours");
  };

  const fetchStudentCourses = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/courses/today/students/${user.student_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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
    try {
      const res = await fetch(
        `http://localhost:5000/api/next-7-days-courses/students/${user.student_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data: ApiResponse = await res.json();

      if (data.available === false) {
        setNextCourses([]);
        setAvailableNextCourses(false);
      } else {
        setNextCourses(data.courses);
        setAvailableNextCourses(true);
      }
    } catch (error) {}
  };

  const handleCourseEnrollements = async (courseId: number) => {
    const updatedEnrollement = {
      ...dataEnrollement,
      course_id: courseId,
    };

    setDataEnrollement(updatedEnrollement);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify(updatedEnrollement);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/enrollments",
        requestOptions
      );
      const repSuccessfull = await response.json();

      if (!response.ok) {
        console.log("Inscription ratée");
      } else {
        setNextCourses((prevCourses) =>
          prevCourses.map((course) => {
            if (course.id === courseId) {
              return {
                ...course,
                isEnrolled: true,
                enrollmentId: repSuccessfull.data.id,
              };
            }
            return course;
          })
        );
        toastSuccesEnrollement();
        console.log(repSuccessfull.message, repSuccessfull.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteCourseEnrollement = async (
    enrollementId: number,
    courseId: number
  ) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/enrollments/${enrollementId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setNextCourses((prevCourses) =>
          prevCourses.map((course) =>
            course.id === courseId ? { ...course, isEnrolled: false } : course
          )
        );
        toastSuccesDeleteEnrollement();
        console.log("vous vous êtes bien désinscris du cours");
      } else {
        console.log(
          "Une erreur a eu lieu lors de la tentative de désinscription"
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStudentCourses();
    fetchNextCourses();
  }, []);

  return (
    <div className="">
      <Header />
      <DateAfficheur />
      <SearchBar />
      <p className="text-[#2B2B2B] ml-7 mt-3 mb-2 text-xl font-bold">
        Mes cours de la journée
      </p>

      {hasCourses ? (
        courses.map((course) => <CardCourse key={course.id} course={course} />)
      ) : (
        <CardNotCourse />
      )}

      <p className="text-[#2B2B2B] ml-7 mt-3 mb-2 text-xl font-bold">
        Cours à venir
      </p>
      {availableNextCourses ? (
        nextCourses.map((nextcourse, index) => (
          <CardNextCourse
            key={index}
            nextcourse={nextcourse}
            handleCourseEnrollements={handleCourseEnrollements}
            deleteEnrollement={handleDeleteCourseEnrollement}
          />
        ))
      ) : (
        <p>Vous n'avez aucun cours dans les 7 prochains jours</p>
      )}
    </div>
  );
};

export default HomePage;
