import { useState, ElementType } from "react";
import { NavLink } from "react-router-dom";
import { Home, GraduationCap, BookOpen, UserCircle2Icon } from "lucide-react";
import { AiFillHome } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import { useCurrentUserContext } from "@/context/UserContext";

const NavBar = () => {
  const {user} = useCurrentUserContext()
  const [activeLink, setActiveLink] = useState("Accueil");

  const links = [
    { name: "Accueil", icon: AiFillHome, link: "/etudiant/home-page" },
    { name: "Classe", icon: FaPeopleGroup, link: "/etudiant/ma-classe" },
    { name: "Cours", icon: IoBookSharp, link: "/etudiant/mes-cours" },
    { name: "Profil", icon: UserCircle2Icon, link: "/mon-profile" },
  ];
  const Teacherlinks = [
    { name: "Accueil", icon: AiFillHome, link: "/professeur/home-page" },
    { name: "Classe", icon: FaPeopleGroup, link: "/professeur/ma-classe" },
    { name: "Cours", icon: IoBookSharp, link: "/professeur/mes-cours" },
    { name: "Profil", icon: UserCircle2Icon, link: "/mon-profile" },
  ];
const Adminlinks = [
    { name: "Accueil", icon: AiFillHome, link: "/home-page" },
    { name: "Classe", icon: FaPeopleGroup, link: "/professeur/mes-classe" },
    { name: "Cours", icon: IoBookSharp, link: "/professeur/mes-cours" },
    { name: "Profil", icon: UserCircle2Icon, link: "/mon-profile" },
  ];

  const renderIcon = (
    name: string,
    IconComponent: ElementType,
    link: string
  ) => {
    const isActive = name === activeLink;
    const color = isActive ? "var(--activeColor)" : "white";
    const size = isActive ? 40 : 30;
    const textSize = isActive ? "text-xl" : "text-base";

    return (
      <NavLink
        to={link}
        className={({ isActive }) => (isActive ? "active-link" : "")}
        onClick={() => setActiveLink(name)}
      >
        <IconComponent color={color} size={size} className="ml-2 mb-1" />
        <p className={`text-white ${textSize}`}>{name}</p>
      </NavLink>
    );
  };

  return (
    <div className="flex justify-center fixed bottom-0 w-full">
      <div className="w-full bg-white">
        <ul className="flex items-center justify-around bg-[#2B2B2B] rounded-t-3xl pt-3 pb-3 h-[5.5rem]">
          {user.role === "Student" ? links.map(({ name, icon, link }) => (
            <li key={name} className="flex flex-col items-center">
              {renderIcon(name, icon, link)}
            </li>
          )) : user.role === "Teacher" ? Teacherlinks.map(({ name, icon, link }) => (
            <li key={name} className="flex flex-col items-center">
              {renderIcon(name, icon, link)}
            </li>
          )) : Adminlinks.map(({ name, icon, link }) => (
            <li key={name} className="flex flex-col items-center">
              {renderIcon(name, icon, link)}
            </li>
          ))} 
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
