interface Teacher {
  id: number;
  userID: number;
  qualifications: string;
  bio: string;
  expertiseField: string;
  hourlyRate: string;
  averageRating: string;
  classroomId: number | null;
  user: {
    id: number;
    firstname: string;
    lastname: string;
  };
}

export interface Course {
  id: number;
  name: string;
  description: string;
  teacher_id: number;
  date: string | null;
  isEnrolled: boolean;
  enrollmentId: number;
  shortFormattedDate: string | null;
  frenchFormattedDate: string | null;
  veryShortFormattedDate: string | null;
  formattedStartTime: string | null;
  formattedEndTime: string | null;
  seat_count: number;
  teachers: Teacher;
}

interface StudentDetails {
  firstname: string;
  lastname: string;
  email: string;
}

export interface ApiResponse {
  studentDetails: StudentDetails;
  courses: Course[];
  hasCourse: boolean;
  available: boolean;

}
