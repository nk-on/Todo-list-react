import Todo from "./Todo";
import { useContext, useRef, useState } from "react";
import { TodosContext } from "../../Context";
export default function TodoContainer() {
  const { Todos, SetTodos } = useContext(TodosContext);
  const [filterCriteria, setFilterCriteria] = useState<string>("all");
  const renderTodos = () => {
    if (filterCriteria === "all") {
      return Todos.map((todoItem) => {
        return (
          <Todo
            key={todoItem.id}
            taskName={todoItem.name}
            completed={todoItem.completed}
            id={todoItem.id}
          />
        );
      });
    }
    if(filterCriteria === 'completed'){
      return Todos.map((todoItem) => {
        if(todoItem.completed){
          return (
            <Todo
              key={todoItem.id}
              taskName={todoItem.name}
              completed={todoItem.completed}
              id={todoItem.id}
            />
          );
        }
      });
    }
    if(filterCriteria === 'active'){
      return Todos.map((todoItem) => {
        if(!todoItem.completed){
          return (
            <Todo
              key={todoItem.id}
              taskName={todoItem.name}
              completed={todoItem.completed}
              id={todoItem.id}
            />
          );
        }
      });
    }
  };
  return (
    <div className="w-[100%] shadow-[0px_35px_50px_-15px_#C2C3D680] bg-[#FFFFFF] dark:bg-[#25273D] dark:shadow-[0px_35px_50px_-15px_#00000080]">
      {renderTodos()}
      <div className="w-[100%] border-b-2 border-[#E3E4F1] text-[#9495A5] p-4 flex justify-between">
        <div>5 items left</div>
        <div
          className="font-bold hover:text-[#494C6B] cursor-pointer dark:hover:text-[#FFFFFF]"
          onClick={() => {
            setFilterCriteria("all");
          }}
        >
          All
        </div>
        <div
          className="font-bold  hover:text-[#494C6B]  cursor-pointer dark:hover:text-[#FFFFFF]"
          onClick={() => {
            setFilterCriteria("active");
          }}
        >
          Active
        </div>
        <div
          className="font-bold  hover:text-[#494C6B]  cursor-pointer dark:hover:text-[#FFFFFF]"
          onClick={() => {
            setFilterCriteria("completed");
          }}
        >
          Completed
        </div>
        <div>Clear Completed</div>
      </div>
    </div>
  );
}
