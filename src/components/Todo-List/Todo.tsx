export default function Todo() {
  return (
    <div className="w-[100%] border-b-2 border-[#E3E4F1] p-4">
      <div className="flex justify-between w-[20%]">
        <input type="radio" className="w-[24px] h-[24px] dark:bg-[#25273D]" />
        <p className="text-[18px]">Todo</p>
      </div>
    </div>
  );
}
