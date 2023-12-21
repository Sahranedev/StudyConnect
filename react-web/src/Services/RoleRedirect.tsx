
import { Navigate } from 'react-router-dom';
import { useCurrentUserContext } from '@/context/UserContext';

const RoleRedirect = () => {
  const { user } = useCurrentUserContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role === 'Student') {
    return <Navigate to="/etudiant/home-page" replace />;
  }

  if (user.role === 'Teacher') {
    return <Navigate to="/professeur/home-page" replace />;
  }

  return <Navigate to="/" replace />;
};

export default RoleRedirect;
