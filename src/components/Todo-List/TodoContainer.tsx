import Todo from "./Todo";
import { useContext } from "react";
import { TodosContext } from "../../Context";
export default function TodoContainer() {
  const {Todos,SetTodos} = useContext(TodosContext)
  return (
    <div className="w-[100%] shadow-[0px_35px_50px_-15px_#C2C3D680] bg-[#FFFFFF] dark:bg-[#25273D] dark:shadow-[0px_35px_50px_-15px_#00000080]">
      {
        Todos.map((todoItem)=>{
          return <Todo key={todoItem.id} taskName={todoItem.name} completed = {todoItem.completed} id = {todoItem.id} />
        })
      }
      <div className="w-[100%] border-b-2 border-[#E3E4F1] text-[#9495A5] p-4 flex justify-between">
        <div>5 items left</div>
        <div className="font-bold hover:text-[#494C6B] cursor-pointer">All</div>
        <div className="font-bold  hover:text-[#494C6B]  cursor-pointer">Active</div>
        <div className="font-bold  hover:text-[#494C6B]  cursor-pointer" onClick={()=>{
          SetTodos(prevObject => 
            prevObject.filter((todoItem)=>{
              return todoItem.completed;
            })
          )
        }}>Completed</div>
        <div>Clear Completed</div>
      </div>
    </div>
  );
}
