import ClassRoomCard from "@/comps/ClassRoom/ClassRoomCard"
import CardCourse from "@/comps/Course/CardCourse"
import CardNotCourse from "@/comps/Course/CardNotCourse"
import DateAfficheur from "@/comps/DateAfficheur"
import SearchBar from "@/comps/SearchBar"
import { useCurrentUserContext } from "@/context/UserContext"
import { ApiResponse, Course } from "@/interfaces/Courses"
import { useState, useEffect } from "react"
import { BiSolidMessageSquareDetail } from "react-icons/bi"
import { FaBell } from "react-icons/fa"
import { IoMdAdd } from "react-icons/io";

const TeacherHomePage = () => {
  const { user } = useCurrentUserContext();
  const [courses, setCourses] = useState<Course[]>([]);
  const [hasCourses, setHasCourses] = useState(true);

  const fetchMyCoursesToday = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/courses/today/teacher/${user.teacher_id}`, {
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

  useEffect(() => {
    fetchMyCoursesToday();
}, [])

  return (
    <div className="">
    
    <div className="mt-6 flex justify-between">

    <div className=" ml-6 flex gap-2">
      <img src={user.avatar} alt="" className="h-12 w-12 rounded-full"/>
        <p className=" flex items-center text-[#2B2B2B] font-bold text-xl">{user.firstname} {user.lastname}</p>
      </div>
      <div className="flex gap-2 items-center mr-6">
        <BiSolidMessageSquareDetail size={27} color="#2B2B2B"/>
        <FaBell size={27} color="#2B2B2B"/>
      </div>
    </div>
    <DateAfficheur />
    <SearchBar />
      <p className="text-[#2B2B2B] ml-7 mt-3 mb-2 text-xl font-bold">Mes cours de la journée</p>

      {hasCourses ? (
        courses.map((course) => <CardCourse key={course.id} course={course} />)
      ) : (
        <CardNotCourse /> 
      )}
      <div className="flex justify-center mt-3">

      <button type="button" className=" w-[21rem] h-10 bg-activeColor rounded-full">
        <div className="flex justify-between items-center">
          <p className="text-white font-semibold text-sm ml-4">

        Créer un nouveau cours
          </p>
          <IoMdAdd color="white" size={32} className="mr-2"/>
        </div>
      </button>
      </div>
      <p className="text-[#2B2B2B] ml-7 mt-3 mb-2 text-xl font-bold">Mes classes</p>

      <ClassRoomCard />

      </div>
  )
}

export default TeacherHomePage