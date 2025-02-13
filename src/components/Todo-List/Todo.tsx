import { CheckButton } from "../CheckButton";
import { TodosContext } from "../Context";
import { useContext, useState } from "react";
interface TaskProps {
  taskName: string;
  completed: boolean;
  id: number;
}
export default function Todo({ taskName, completed, id }: TaskProps) {
  const { Todos, SetTodos } = useContext(TodosContext);
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      className="w-[100%] border-b-2 border-[#E3E4F1] p-4 flex justify-between"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between w-[20%]">
        {/* i will move this checked Button component as a seaprete element with function and completed prop */}
        <CheckButton completed={completed}  functionProp={
          ()=>{
            const mapedTodos = Todos.map((todoItem)=> {
              if(todoItem.id === id){
                todoItem.completed = !todoItem.completed
              };
              return todoItem;
            } );
            SetTodos([...mapedTodos])
          }
        }></CheckButton>
        <p
          className={`text-[18px dark:text-[#C8CBE7] ${
            completed && "line-through"
          } cursor-pointer`}
        >
          {taskName}
        </p>
      </div>
      {hovered && <img src={"public/assets/Delete.svg"} className = "cursor-pointer" alt="closeSign" onClick={()=>{
        const filteredTodos = Todos.filter((todoItem)=>{
          if(todoItem.id !== id){
            return todoItem;
          }
        })
        SetTodos(filteredTodos);
      }} />}
    </div>
  );
}
