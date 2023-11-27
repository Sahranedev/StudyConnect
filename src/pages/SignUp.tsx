import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";
import { SignUpData } from "../interfaces/SingUpData";
import { useState } from "react";
const { VITE_BACKEND_URL } = import.meta.env;


const SignUp = () => {
  const navigate = useNavigate();
  const fleche = "<";
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState<SignUpData>({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    role: selectedRole,
  });
 
    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value}));
  };

  const handleSelectChange = (value: string) => {
    setSelectedRole(value);
    console.log("Selected Role: ", value);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedFormData = { ...formData, role: selectedRole };
    console.log("Submitting Data: ", updatedFormData);
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', "application/json");
    const body = JSON.stringify(updatedFormData)
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    }

    try {
       const response = await fetch(`${VITE_BACKEND_URL}/api/users/students`, requestOptions)
 
       if (!response.ok) {
         console.log("Je suis dans l'erreur")
       } else {
         console.log("j'ai bien fonctionné")
         navigate(("/login"))
       }
     } catch (error) {
         console.error(error)
       }
 
 
       

    
  }



  return (
    <div className="w-full">
      <div className="bg-gray-300 mb-4 h-56 w-full">
        <div className=" h-full flex flex-col-reverse">
          <p className="ml-10 mb-4 mt-2 font-bold text-2xl">Inscription</p>
          <p onClick={() => navigate(-1)} className="ml-10 cursor-pointer">
            <span>{fleche}</span>- Retour
          </p>
        </div>
      </div>
        <form action="submit" onSubmit={handleSubmit}>
      <div className=" mt-10 flex flex-col gap-6 items-center">
          
        <Input
          onChange={handleChange}
          value={formData?.firstname}
          name="firstname"
          placeholder="*Prénom"
          className="w-80"
          />
        <Input
          onChange={handleChange}
          value={formData?.lastname}
          name="lastname"
          placeholder="*Nom"
          className="w-80"
          />
        <Input
          onChange={handleChange}
          value={formData?.email}
          name="email"
          placeholder="*Adresse e-mail"
          type="email"
          className="w-80"
          />
        <Input
          onChange={handleChange}
          value={formData?.password}
          name="password"
          placeholder="*Mot de passe"
          type="password"
          className="w-80"
          />

        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className="w-80">
            <SelectValue placeholder="Vous êtes..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem  value="Teacher">Professeur</SelectItem>
              <SelectItem  value="Student">Etudiant</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <p className="text-end mr-10 mt-2 italic text-sm">*Champ obligatoire</p>
      <div className=" w-80 ml-10 mt-6">
        <div className="flex gap-6">
          <Switch className="items-center" />
          <p className="text-sm italic">
            Je certifie d’avoir lu et j’accepte les conditions générales.
          </p>
        </div>
        <div className="flex gap-6 mt-2">
          <Switch className="items-center" />
          <p className="text-sm italic">
            J’accepte de recevoir des notifications de l’application.
          </p>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <Button type="submit" className="rounded-full  w-64 h-12 text-2xl">S'inscrire</Button>
      </div>
          </form>
    </div>
  );
};

export default SignUp;
