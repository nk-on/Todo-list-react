import { useRef, useState } from "react";
import { useContext } from "react";
import { TodosContext } from "../Context";
import { CheckButton } from "../CheckButton";
export default function TodoInput() {
  const { Todos, SetTodos } = useContext(TodosContext);
  const task = useRef<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const clearInput = () => {
    if(inputRef.current){
      inputRef.current.value = ""
    }
  };
  const Todo = {
    id: Math.floor(Math.random() * 100000),
    name: "",
    completed:false,
  };
  const [checked,setChecked] = useState(false)
  return (
    <div className="w-[150%]  bg-[#FFFFFF] dark:bg-[#25273D] flex justify-between rounded-[5px]">
      <div className="flex justify-center items-center w-[5%]">
        <CheckButton completed = {checked} functionProp={()=>{
            setChecked(!checked)
          }}/>
      </div>
      <input
        type="text"
        className="w-[90%] h-[64px] dark:bg-[#25273D] dark:text-[#FFFFFF]  placeholder:text-lg focus:outline-none"
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
            Todo.name = task.current
            clearInput();
            Todo.completed = checked;
            task.current = "";
            SetTodos([...Todos, Todo]);
          }
        }}
      />
    </div>
  );
}
