import { Button } from '@/components/ui/button';
import { FaPlay } from "react-icons/fa";
import {Course} from "../../../interfaces/Courses"

interface BouttonCardCourseComponentProps {
  nextcourse: Course;
  deleteEnrollement: (enrollmentId: number, courseId: number) => Promise<void>;
}

const DeleteEnrollement: React.FC<BouttonCardCourseComponentProps> = ({nextcourse, deleteEnrollement}) => {
  return (
    <Button type="button" onClick={() => deleteEnrollement(nextcourse.enrollmentId, nextcourse.id)}  className="bg-white text-darkGrey border border-white h-6 rounded-full">
                      <div className="flex gap-3 items-center">
                          <p className="font-normal">Inscrit</p> 
                        
              <FaPlay size={12} />
            </div>
    </Button>
  )
}

export default DeleteEnrollement