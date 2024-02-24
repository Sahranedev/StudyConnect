import { FaBell } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { useCurrentUserContext } from "@/context/UserContext";

interface HeaderProps {
  inverseColors?: boolean;
}
const Header: React.FC<HeaderProps> = ({ inverseColors }) => {
  const { user } = useCurrentUserContext();

  return (
    <div
      className={`mt-6 flex justify-between ${
        inverseColors ? "text-white" : "text-black"
      }`}
    >
      <div className="ml-6 flex gap-2">
        <img src={user.avatar} alt="" className="h-12 w-12 rounded-full" />
        <p className="flex items-center font-bold text-xl">
          {user.firstname} {user.lastname}
        </p>
      </div>
      <div className="flex gap-2 items-center mr-6">
        <BiSolidMessageSquareDetail
          size={27}
          color={inverseColors ? "#FFF" : "#2B2B2B"}
        />
        <FaBell size={27} color={inverseColors ? "#FFF" : "#2B2B2B"} />
      </div>
    </div>
  );
};

export default Header;
