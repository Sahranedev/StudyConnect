export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    avatar?: string;
    password: string;
    role: 'Admin' | 'Teacher' | 'Student';
    createdAt: Date;
    lastLogin?: Date;
    status?: 'Active' | 'Inactive' | 'Banned';
    prefferedLanguage?: string; 

}

export interface Student extends User {
    progress?: string;
    lastActivity?: Date;
    curriculum?: string;
    points?: number;
  }
  
  export interface Teacher extends User {
    qualifications?: string;
    bio?: string;
    expertiseField?: string;
    hourlyRate?: number;
    averageRating?: number;
  }
  