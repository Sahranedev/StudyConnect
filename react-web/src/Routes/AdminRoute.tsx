import { Navigate } from 'react-router-dom';
import { useCurrentUserContext } from '@/context/UserContext';


interface AdminRouteProps {
  children: React.ReactNode;
}


 const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { user } = useCurrentUserContext();
  
  if (!user || user.role !== 'Admin') {
    return <Navigate to="/login" />;
  }

  return children;
 };

export default AdminRoute;

