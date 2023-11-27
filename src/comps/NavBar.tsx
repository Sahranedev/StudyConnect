import { useState, ElementType } from "react";
import { NavLink } from "react-router-dom";
import { Home, GraduationCap, BookOpen, UserCircle2Icon } from "lucide-react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Accueil");

  const links = [
    { name: "Accueil", icon: Home, link: "/home-page" },
    { name: "Classe", icon: GraduationCap, link: "/ma-classe" },
    { name: "Cours", icon: BookOpen, link: "/mes-cours" },
    { name: "Profile", icon: UserCircle2Icon, link: "/mon-profile" },
  ];

  const renderIcon = (
    name: string,
    IconComponent: ElementType,
    link: string
  ) => {
    const isActive = name === activeLink;
    const color = isActive ? "red" : "white";
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
        <ul className="flex items-center justify-around bg-[#2B2B2B] rounded-t-3xl pt-3 pb-3">
          {links.map(({ name, icon, link }) => (
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
