import logo from "../assets/CodeLingoLogo.png";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useCurrentUserContext } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";
import { BaseUser, Teacher, Student } from "../interfaces/User";
import { UserType } from "../interfaces/User";
import { toast, Bounce} from 'react-toastify';


const { VITE_BACKEND_URL } = import.meta.env;

export default function Login() {
  const { setUser, user } = useCurrentUserContext()
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const roleRedirect = () => {
    if (user.role === "Student") {
      navigate("/etudiant/home-page")
    } else if (user.role === "Teacher") {
      navigate("/professeur/home-page")
    }
  }

  useEffect(() => {
    roleRedirect();
  }, [user])


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError("Veuillez saisir un email et un mot de passe.");
      toast.error("Erreur lors de la tentative de connexion")

      return;
    } else {
      setError("");
    }
  
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const body = JSON.stringify({ email, password });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
  
    try {
      const response = await fetch(`${VITE_BACKEND_URL}/api/login`, requestOptions);
  
      if (response.ok) {
        const data = await response.json();
        let user: UserType;
  
        if (data.user.role === 'Student') {
          user = data.user as Student;
        } else if (data.user.role === 'Teacher') {
          user = data.user as Teacher;
        } else {
          user = data.user as BaseUser;
        }
  
        setUser(user);
  

                toast.success(() => (
          <div>
            Hello {user.firstname} 👋 , bienvenue sur <span className="font-bold">Code Lingo</span>
          </div>),
          {
            autoClose: 3000,
            transition: Bounce,
            
          }
          
          
        );
     
      
      }
    } catch (error) {
      console.error(error);
      setError("Échec de la connexion. Veuillez réessayer.");
    }
  };
  

  return (
    <div className="bg-blue-900 min-h-screen">
      <div className="flex justify-center">
        <img src={logo} alt="Logo Code Lingo" className="w-60" />
      </div>
      <div className="flex flex-col justify-center items-center text-white text-2xl">
        Se connecter
        <form
          onSubmit={handleLogin}
          className="w-80 mt-6 text-black flex flex-col gap-6"
        >
          <Input
            placeholder="Adresse Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Mot de passe"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center">
            <Button type="submit" className="mt-2 w-56 rounded-full text-xl">
              Connexion
            </Button>
            
          </div>
        </form>
        <p className="text-red-600 text-sm mt-4">{error}</p>
      </div>
      <p className="mx-auto text-center text-white underline underline-offset-4 mt-6">
        Mot de passe oublié ?
      </p>

      <div className="flex justify-center">
        <div className=" mt-8 w-80 border-t border-gray-300"></div>
      </div>
      <h3 className="text-white font-bold text-2xl text-center mt-4">
        Nouveau Membre
      </h3>
      <p className="text-center mt-2 text-white">Vous êtes nouveau membre ?</p>
      <p className="text-center text-white ">
        Créer votre espace membre pour acceder à toute l'application
      </p>

      <div className="flex justify-center mt-4">
        <Button 
          onClick={() => navigate("/sign-up")}
          variant="outline"
          className=" w-56 rounded-full text-xl border-4 border-black"
        >
          S'inscrire
        </Button>
      </div>
      <footer className="mt-24 text-white">
        <p className="text-center">Code-Lingo.fr</p>
        <p className="text-center">Mention Légal/FAQ</p>
      </footer>
   
    </div>
  );
}
