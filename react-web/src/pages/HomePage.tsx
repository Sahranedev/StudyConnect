
import { useCurrentUserContext } from "@/context/UserContext";
import { FaBell } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import DateAfficheur from "@/comps/DateAfficheur";
import SearchBar from "@/comps/SearchBar";
import CardCourse from "../comps/Course/CardCourse";
import CardNextCourse from "@/comps/Course/CardNextCourse";

const HomePage = () => {
  const { user, setUser } = useCurrentUserContext()

  const fetchStudentCourses = async () => {
    const res = await fetch("http://localhost:5000/api/courses/students/:id", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       
      },
    });

    const data = await res.json();

    console.log(data);
  }

;
 

  
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
      <CardCourse />
      <p className="text-[#2B2B2B] ml-7 mt-3 mb-2 text-xl font-bold">Cours à venir</p>
      <CardNextCourse />
    </div>
  )
}

export default HomePage