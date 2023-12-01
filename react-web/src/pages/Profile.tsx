import { useCurrentUserContext } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";
import { User } from "../interfaces/User";

const Profile = () => {
  const { setUser } = useCurrentUserContext()
  const navigate = useNavigate()

  const handleLogOut = () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUser({} as User);
      navigate("/login");
   
  }
  return (
    <div>
      <p>
      Profile
      </p>
      <button type='button' onClick={handleLogOut}>SE DECONNECTER</button>
    </div>
  )
}

export default Profile