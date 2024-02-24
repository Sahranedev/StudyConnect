import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import BmwImage from "../../assets/bmw-serie-4-coupe-14.jpg";
import { FaPlayCircle } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { Course } from "../../interfaces/Courses";

interface CourseComponentProps {
  course: Course;
}

const CardCourse: React.FC<CourseComponentProps> = ({ course }) => {
  console.log(course.shortFormattedDate);
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-[21rem] h-64 rounded-b-lg relative">
          <img src={BmwImage} className="rounded-t-lg h-44 w-full" />
          <div className=" flex items-center w-[6.2rem] h- bg-darkGrey absolute top-0 right-0 rounded-full ">
            <FaClock color="white" className="ml-1" />
            <p className="text-white ml-2 text-sm">
              {course.formattedStartTime}-{course.formattedEndTime}
            </p>
          </div>
          <div className="bg-darkGrey rounded-t-lg rounded-b-lg absolute bottom-[10px] w-full ">
            <CardTitle className="text-white pt-2 pl-2 text-[20px]">
              {course.name}
            </CardTitle>
            <div className="flex justify-around items-center">
              <CardDescription className="text-white text-[12px] wrap p-2">
                {course.description}
              </CardDescription>
              <FaPlayCircle color={"white"} size={40} className="mr-6 mb-2 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
