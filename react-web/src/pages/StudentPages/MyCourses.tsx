import SearchBar from "@/comps/SearchBar";
import Header from "../../comps/Header";
import CardCategory from "@/comps/Course/Categories/CardCategory";

const MyCourses = () => {
  return (
    <div className="">
      <div
        className="h-56 bg-[#35005B]
      overflow-hidden"
      >
        <div className="">
          <Header inverseColors={true} />
        </div>
        <p className="text-white text-2xl font-bold text-center mt-4">
          Que souhaitez-vous apprendre ?
        </p>
        <div className="mt-6">
          <SearchBar />
        </div>
      </div>
      <div className="ml-6">
        <p className=" text-2xl font-bold mt-2">Catégories</p>
        <CardCategory />
      </div>
    </div>
  );
};

export default MyCourses;
