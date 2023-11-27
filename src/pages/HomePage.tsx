
import { useCurrentUserContext } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";
import { User } from "../interfaces/User";

const HomePage = () => {
  const { user, setUser } = useCurrentUserContext()
  const navigate = useNavigate()

  const handleLogOut = () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUser({} as User);
      navigate("/login");
   
  }
  
  return (
    <div className="">
      HomePage
      <p>{user.firstname}</p>
      <button type='button' onClick={handleLogOut}>SE DECONNECTER</button>
    </div>
  )
}

export default HomePage