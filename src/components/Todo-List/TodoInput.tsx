export default function TodoInput() {
  return (
    <div className="w-[50%]  bg-[#FFFFFF] dark:bg-[#25273D] flex justify-between rounded-[5px]">
      <div className="flex justify-center items-center w-[5%]">
        <input type="radio" className="w-[24px] h-[24px] dark:bg-[#25273D]" />
      </div>
      <input type="text" className="w-[90%] h-[64px] dark:bg-[#25273D] dark:text-[#FFFFFF] placeholder:text-lg" placeholder="Create a new Todo"/>;
    </div>
  );
}
