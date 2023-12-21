export interface BaseUser {
  id: number;
  student_id?: number;
  teacher_id?: number;
  firstname: string;
  lastname: string;
  email: string;
  avatar?: string;
  role: 'Admin' | 'Teacher' | 'Student';
  createdAt: Date;
  lastLogin?: Date;
  status?: 'Active' | 'Inactive' | 'Banned';
  preferredLanguage?: string;
}

export interface Student extends BaseUser {
  role: 'Student';
  progress?: string;
  lastActivity?: Date;
  curriculum?: string;
  points?: number;
}

export interface Teacher extends BaseUser {
  role: 'Teacher';
  qualifications?: string;
  bio?: string;
  expertiseField?: string;
  hourlyRate?: number;
  averageRating?: number;
}

export type UserType = BaseUser | Student | Teacher;
