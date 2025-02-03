interface HeadingProps {
  nightMode: boolean;
  setNightMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Heading({ nightMode, setNightMode }: HeadingProps) {
  // const coverImage = nightMode ? 'public/assets/cover-photo-night.jpg':'./assets/cover-photo-day.jpg';
  return (
    <div className="w-[100%] h-[30vh] bg-no-repeat  bg-[url(./assets/cover-photo-day.jpg)] dark:bg-[url(./assets/cover-photo-night.jpg)] bg-cover flex justify-center items-center">
      <div className="flex w-[50%] justify-between">
        <h1 className="text-[#FFFFFF] font-bold text-[40px] text-[26px] tracking-[0.5em] uppercase">Todo</h1>
        <img
          className="cursor-pointer"
          onClick={()=>{
            setNightMode(!nightMode)
          }}
          src={`${
            nightMode ? "public/assets/icon-night.svg" : "public/assets/icon-day-sun.svg"
          }`}
        ></img>
      </div>
    </div>
  );
}
