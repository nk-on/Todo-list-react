interface HeadingProps {
  nightMode: boolean;
  setNightMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Heading({ nightMode, setNightMode }: HeadingProps) {
  return (
    <div className="w-[100%] h-[300px] bg-no-repeat  bg-[url(./assets/cover-photo-day.jpg)] dark:bg-[url(./assets/cover-photo-night.jpg)] bg-cover flex justify-center items-start py-[70px]">
      <div className="flex w-[50%] justify-between">
        <h1 className="text-[#FFFFFF] font-bold text-[40px] tracking-[0.5em] uppercase">Todo</h1>
        <img
          className="cursor-pointer"
          onClick={()=>{
            setNightMode(!nightMode)
          }}
          src={`${
            nightMode ? "./assets/icon-night.svg" : "./assets/icon-day-sun.svg"
          }`}
        ></img>
      </div>
    </div>
  );
}
