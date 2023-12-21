import avatar from "../../assets/avatar-neutre.png";

const ClassRoomCard = () => {
  const numerStudent = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="flex justify-center">
      <div className="w-[21rem]  h-[6.3rem] bg-[#D9D9D9] rounded-xl">
        <div className="flex mt-4 ml-4">
          {numerStudent.slice(0, 3).map((item, index) => (
            <img
              src={avatar}
              alt=""
              key={index}
              className="w-7 h-7 rounded-full"
            />
          ))}
          {numerStudent.length > 3 && (
            <>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-activeColor text-sm text-white">
                  +{numerStudent.length - 3}
                </div>
                <p className="ml-2 text-sm">Étudiants</p>
              </div>
            </>
          )}
        </div>
        <p className="font-bold text-xl ml-4 mt-3">My Digital School</p>
      </div>
    </div>
  );
};

export default ClassRoomCard;
