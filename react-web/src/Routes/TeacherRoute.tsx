import { Navigate } from 'react-router-dom';
import { useCurrentUserContext } from '@/context/UserContext';

import React from 'react';

interface TeacherRouteProps {
  children: React.ReactNode;
}


 const TeacherRoute: React.FC<TeacherRouteProps> = ({ children }) => {
  const { user } = useCurrentUserContext();
  
  if (!user || user.role !== 'Teacher') {
    return <Navigate to="/login" />;
  }

  return children;
 };

export default TeacherRoute;

