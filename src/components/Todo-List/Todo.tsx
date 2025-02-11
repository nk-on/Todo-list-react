import { TodosContext } from "../../Context";
import { useContext, useState } from "react";
interface TaskProps {
  taskName: string;
  completed: boolean;
  id: number;
}
export default function Todo({ taskName, completed, id }: TaskProps) {
  const { Todos, SetTodos } = useContext(TodosContext);
  return (
    <div className="w-[100%] border-b-2 border-[#E3E4F1] p-4">
      <div className="flex justify-between w-[20%]">
        <div
          className={`flex justify-center items-center w-[24px] h-[24px] rounded-[50%] border border-[#E3E4F1] dark:bg-[#25273D] cursor-pointer  ${
            completed && "bg-gradient-to-br from-[#55DDFF] to-[#C058F3]"
          }`}
          onClick={() => {
            SetTodos((prevObjects) =>
              prevObjects.map((todoItem) => {
                return todoItem.id === id
                  ? { ...todoItem, completed: !completed }
                  : todoItem;
              })
            );
          }}
        >{completed && <img src="public/assets/Checked.svg" alt="checked" />}</div>
        <p
          className={`text-[18px dark:text-[#C8CBE7] ${
            completed && "line-through"
          } cursor-pointer`}
          onClick={() => {}}
        >
          {taskName}
        </p>
      </div>
    </div>
  );
}
