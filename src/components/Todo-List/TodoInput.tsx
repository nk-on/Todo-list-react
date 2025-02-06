import { useRef } from "react";
import { useContext } from "react";
import { TodosContext } from "../../App";
export default function TodoInput() {
  const {Todos,SetTodos} = useContext(TodosContext);
  const task = useRef<string>("");
  return (
    <div className="w-[100%]  bg-[#FFFFFF] dark:bg-[#25273D] flex justify-between rounded-[5px]">
      <div className="flex justify-center items-center w-[5%]">
        <input
          type="radio"
          className="w-[24px] h-[24px] dark:bg-[#25273D]"
          onChange={(event) => {
            const Todo = {
              id:Math.floor(Math.random()*100000),
              name:task.current,
              completed:false,
            }
            SetTodos([...Todos,Todo])
            event.target.checked = false;
          }}
        />
      </div>
      <input
        type="text"
        className="w-[90%] h-[64px] dark:bg-[#25273D] dark:text-[#FFFFFF] placeholder:text-lg"
        placeholder="Create a new Todo"
        onChange={(event)=>{
          task.current = event.target.value;
        }}
      />
      ;
    </div>
  );
}
