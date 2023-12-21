import { Navigate } from 'react-router-dom';
import { useCurrentUserContext } from '@/context/UserContext';

import React from 'react';

interface StudentRouteProps {
  children: React.ReactNode;
}


 const StudentRoute: React.FC<StudentRouteProps> = ({ children }) => {
  const { user } = useCurrentUserContext();
  
  if (!user || user.role !== 'Student') {
    return <Navigate to="/login" />;
  }

  return children;
 };

export default StudentRoute;

