import { TodosContext } from "../../App"
import { useContext } from "react"
interface TaskProps {
  taskName:string,
  completed:boolean
  id:number
}
export default function Todo({taskName,completed,id}:TaskProps) {
  const {SetTodos} = useContext(TodosContext);
  return (
    <div className="w-[100%] border-b-2 border-[#E3E4F1] p-4">
      <div className="flex justify-between w-[20%]">
        <input type="radio" className="w-[24px] h-[24px] dark:bg-[#25273D]" onChange={(event)=>{
          SetTodos(prevObjects => prevObjects.map((todoItem)=>{
            return todoItem.id === id ? {...todoItem,completed:!completed}:todoItem;
          }))
          event.target.checked = false;
        }}/>
        <p className={`text-[18px dark:text-[#C8CBE7] ${completed && "line-through"}`}>{taskName}</p>
      </div>
    </div>
  );
}
