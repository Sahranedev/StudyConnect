import { Button } from "@/components/ui/button";
import soniaAvatar from "../../assets/sonia.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { ImPriceTag } from "react-icons/im";
import { FaBell } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

import { Course } from "../../interfaces/Courses";
import DeleteEnrollement from "./enrollementButton/DeleteEnrollement";
import SubmitEnrollement from "./enrollementButton/SubmitEnrollement";

interface NextCardCourseComponentProps {
    nextcourse: Course;
  handleCourseEnrollements: (courseId: number) => Promise<void>;
  deleteEnrollement: (enrollmentId: number, courseId: number) => Promise<void>;
}

const CardNextCourse: React.FC<NextCardCourseComponentProps> = ({
  nextcourse, handleCourseEnrollements, deleteEnrollement
}) => {

    console.log("data next course:", nextcourse)
  return (
    <div className="flex justify-center mb-6">
      <div className=" h-44 w-[21rem] bg-darkGrey rounded-xl">
        <div className="flex ml-4 mt-2 gap-3">
          <img src={soniaAvatar} alt="" className="h-8 w-8 rounded-full" />
          <p className="text-xl text-white">
            {nextcourse.teachers.user.firstname}{" "}
            {nextcourse.teachers.user.lastname}
          </p>
        </div>
        <div className="flex mt-3 ml-4 gap-5">
          <div className="flex gap-2">
            <FaCalendarAlt size={20} color="white" />
            <p className="text-sm text-white">
              {nextcourse.veryShortFormattedDate}
            </p>
          </div>
          <div className="flex gap-2">
            <FaClock size={20} color="white" />
            <p className="text-sm text-white ">
              {nextcourse.formattedStartTime}-{nextcourse.formattedEndTime}
            </p>
          </div>
          <div className="flex gap-2">
            <ImPriceTag size={20} color="white" />
            <p className="text-sm text-white">{nextcourse.name}</p>
          </div>
        </div>
        <p className="text-white ml-4 mt-2 text-[12px]">
          {nextcourse.name}, {nextcourse.description}.
        </p>
        <div className="mt-3 ml-4  flex  justify-between mr-4">
          <Button className=" bg-transparent text border border-white h-6 rounded-full">
            <div className="flex gap-2 items-center">
              <FaBell size={12} color="white" />
              <p className=" font-normal">Être notifié</p>
            </div>
          </Button>
                  
                      <div className="flex gap-3 items-center">
                          {nextcourse.isEnrolled ? <DeleteEnrollement nextcourse={nextcourse} deleteEnrollement={deleteEnrollement}  /> : <SubmitEnrollement nextcourse={nextcourse}  handleCourseEnrollements={handleCourseEnrollements}  />
                          }
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default CardNextCourse;
