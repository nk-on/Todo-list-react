import { useRef } from "react";
import { useContext } from "react";
import { TodosContext } from "../Context";
export default function TodoInput() {
  const { Todos, SetTodos } = useContext(TodosContext);
  const task = useRef<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const clearInput = () => {
    inputRef.current.value = "";
  };
  return (
    <div className="w-[100%]  bg-[#FFFFFF] dark:bg-[#25273D] flex justify-between rounded-[5px]">
      <div className="flex justify-center items-center w-[5%]">
        <input
          type="radio"
          className="w-[24px] h-[24px] dark:bg-[#25273D] "
        />
      </div>
      <input
        type="text"
        className="w-[90%] h-[64px] dark:bg-[#25273D] dark:text-[#FFFFFF]  placeholder:text-lg"
        placeholder="Create a new Todo"
        ref={inputRef}
        onChange={(event) => {
          task.current = event.target.value;
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            if(task.current === ""){
              return;
            }
            const Todo = {
              id: Math.floor(Math.random() * 100000),
              name: task.current,
              completed: false,
            };
            clearInput();
            task.current = "";
            SetTodos([...Todos, Todo]);
          }
        }}
      />
      ;
    </div>
  );
}
