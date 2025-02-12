import { createContext } from "react";
import { Task } from "../App";
import TodoList from "./TodoList";
import { useState } from "react";
interface contextProps {
  Todos: Task[];
  SetTodos: React.Dispatch<React.SetStateAction<Task[]>>;
  hovered:boolean,
  setHovered:React.Dispatch<React.SetStateAction<boolean>>;
}
export const TodosContext = createContext<contextProps>({
  Todos: [],
  SetTodos: () => {},
  hovered:false,
  setHovered:()=>{}
});

export function Provider() {
  const [Todos,SetTodos] = useState<Task[]>([])
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <TodosContext.Provider value={{Todos, SetTodos,hovered,setHovered }}>
      <TodoList />
    </TodosContext.Provider>
  );
}