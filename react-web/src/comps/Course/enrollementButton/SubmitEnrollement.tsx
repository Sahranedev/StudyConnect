import { Button } from "@/components/ui/button";
import { FaPlay } from "react-icons/fa";
import { Course } from "../../../interfaces/Courses";

interface BouttonCardCourseComponentProps {
  nextcourse: Course;
  handleCourseEnrollements: (courseId: number) => Promise<void>;
}

const SubmitEnrollement: React.FC<BouttonCardCourseComponentProps> = ({
  nextcourse,
  handleCourseEnrollements,
}) => {
  return (
    <Button
      onClick={() => handleCourseEnrollements(nextcourse.id)}
      className="bg-white text-darkGrey border border-white h-6 rounded-full"
    >
      <div className="flex gap-3 items-center">
        <p className="font-normal">S'inscire au cours</p>
        <FaPlay size={12} />
      </div>
    </Button>
  );
};

export default SubmitEnrollement;
