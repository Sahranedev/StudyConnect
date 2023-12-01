import { Input, InputSearch } from "@/components/ui/input"
import { IoSearchOutline } from "react-icons/io5";


const SearchBar = () => {
    return (
   /*    <div className="flex justify-center mt-3">
            
    <Input
        type="search"
        placeholder="Search..."
        className=" w-10/12 rounded-full bg-[#2B2B2B] h-12 text-white"
        
            />
            <div className="h-12 w-12 bg-gray-300"></div>
        </div> */
        <div className="flex justify-center mt-2">

        <div className="bg-zinc-300 flex items-stretch gap-5 pr-5 rounded-3xl w-10/12">
        <div className="bg-zinc-800 flex items-center justify-between gap-5 px-5 rounded-3xl">
          <InputSearch  
            type="text" 
            placeholder="Rechercher un cours" 
            className="text-white text-xs leading-4 my-auto bg-transparent border-none outline-none w-full"
            />
          <IoSearchOutline size={30} color="white" />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8116b2a0-1105-454f-9954-05a1c18294ec?"
          className="aspect-[0.9] object-contain object-center w-[18px] fill-white overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
      </div>
          </div>
      
  )
}

export default SearchBar