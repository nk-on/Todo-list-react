interface CheckButtonProp  {
    completed:boolean;
    functionProp: () => void;
}
export function CheckButton({completed,functionProp}:CheckButtonProp) {
  return (
    <div
      className={`flex justify-center items-center w-[24px] h-[24px] rounded-[50%] border border-[#E3E4F1] dark:bg-[#25273D] cursor-pointer  ${
        completed && "bg-gradient-to-br from-[#55DDFF] to-[#C058F3]"
      }`}
      onClick={functionProp}
    >
      {completed && <img src="./assets/Checked.svg" alt="checked" />}
    </div>
  );
}
