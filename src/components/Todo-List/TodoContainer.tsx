import Todo from "./Todo";
import { useContext, useReducer } from "react";
import { TodosContext } from "../Context";
import { FilterOption } from "../filterOption";
function reducer(state:{criteria:string | boolean},action:{type:string}):{criteria:string | boolean}{
  const {type} = action;
  switch(type){
    case 'Completed':
      return {...state,criteria:true}
    case 'Active':
      return {...state,criteria:false}
    default:
      return {...state,criteria:'All'}
  }
}
export default function TodoContainer() {
  const { Todos, SetTodos } = useContext(TodosContext);
  const [filterCriteria,dispatch] = useReducer(reducer,{criteria:"All"});
  const {criteria} = filterCriteria;
  const filterCriteriaArray = ["All", "Completed", "Active"];
  const renderTodos = () => {
    const filteredTodos = criteria === "All" ? Todos : Todos.filter((todo) => todo.completed === criteria);
    return filteredTodos.map((todoItem) => {
      return (
        <Todo
          key={todoItem.id}
          taskName={todoItem.name}
          completed={todoItem.completed}
          id={todoItem.id}
        />
      );
    });
  };
  return (
    <div className="lg:w-[100%] shadow-[0px_35px_50px_-15px_#C2C3D680] bg-[#FFFFFF] dark:bg-[#25273D] dark:shadow-[0px_35px_50px_-15px_#00000080]">
      {renderTodos()}
      <div className="min-w-[100%]  gap-[5px] border-b-2 border-[#E3E4F1] text-[#9495A5] p-4 flex justify-between">
        <div>{Todos.length} items left</div>
        {filterCriteriaArray.map((item,index) => (
          <FilterOption key={index} text={item} dispatch={dispatch} />
        ))}
        <div
          className="cursor-pointer"
          onClick={() => {
            SetTodos([]);
          }}
        >
          Clear Completed
        </div>
      </div>
    </div>
  );
}
