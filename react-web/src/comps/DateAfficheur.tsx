import { DateItemProps } from "@/interfaces/Date";

function DateItem({ date, isToday }: DateItemProps) {
    let dayName = date.toLocaleString('fr-FR', { weekday: 'short' }); 
    dayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);

    const dayNameClass = isToday ? "text-2xl font-bold" : "text-xs";
    const dateNumberClass = isToday ? "text-xl" : "text-sm";
    const dateCircleClass = isToday ? "bg-[#FF0C55] text-white font-bold" : "text-black bg-gray-200";

    return (
      <div className=" w-full flex flex-col items-center justify-center m-1">
        <span className={`${dayNameClass} `}>{dayName}</span>
        
        <div className={`w-10 h-10 flex items-center justify-center rounded-full mt-2 ${dateCircleClass}`}>
          <span className={dateNumberClass}>{date.getDate()}</span>
        </div>
      </div>
    );
}


function DateAfficheur() {
    const today = new Date();
    const dates = [];
  
    for (let i = -3; i <= 3; i++) {
      const newDate = new Date();
      newDate.setDate(today.getDate() + i);
      dates.push(newDate);
    }
  
    return (
      <div className="flex justify-center">
        {dates.map((date, index) => (
          <DateItem key={index} date={date} isToday={date.toDateString() === today.toDateString()} />
        ))}
      </div>
    );
  }
  
  export default DateAfficheur;
  