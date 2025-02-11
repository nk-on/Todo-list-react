import Todo from "./Todo";
import { useContext ,useState } from "react";
import { TodosContext } from "../Context";
import { FilterOption } from "../filterOption";
export default function TodoContainer() {
  const { Todos,SetTodos } = useContext(TodosContext);
  const [filterCriteria, setFilterCriteria] = useState<string>("All");
  const filterCriteriaArray = ["All","Completed","Active"]
  const renderTodos = () => {
    if (filterCriteria === "All") {
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
    if(filterCriteria === 'Completed'){
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
    if(filterCriteria === 'Active'){
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
        <div>{Todos.length} items left</div>
        {
          filterCriteriaArray.map(item=> <FilterOption text={item} setFilterCriteria={setFilterCriteria} />)
        }
        <div className="cursor-pointer" onClick={()=>{
          SetTodos([]);
        }}>Clear Completed</div>
      </div>
    </div>
  );
}
