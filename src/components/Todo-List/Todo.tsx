import { TodosContext } from "../../Context";
import { useContext } from "react";
interface TaskProps {
  taskName: string;
  completed: boolean;
  id: number;
}
export default function Todo({ taskName, completed, id }: TaskProps) {
  const {Todos, SetTodos } = useContext(TodosContext);
  return (
    <div className="w-[100%] border-b-2 border-[#E3E4F1] p-4">
      <div className="flex justify-between w-[20%]">
        <input
          type="radio"
          className="w-[24px] h-[24px] dark:bg-[#25273D]"
          onChange={(event) => {
            const filteredTodos = Todos.filter((todoItem)=>{
              if(id !== todoItem.id){
                return todoItem;
              }
            });
            SetTodos(filteredTodos);
            event.target.checked = false;
          }}
        />
        <p
          className={`text-[18px dark:text-[#C8CBE7] ${completed && "line-through"} cursor-pointer`}
          onClick={() => {
            SetTodos((prevObjects) =>
              prevObjects.map((todoItem) => {
                return todoItem.id === id
                  ? { ...todoItem, completed: !completed }
                  : todoItem;
              })
            );
          }}
        >
          {taskName}
        </p>
      </div>
    </div>
  );
}
