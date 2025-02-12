import { createContext } from "react";
import { Task } from "../App";
import TodoList from "./TodoList";
import { useState } from "react";
interface contextProps {
  Todos: Task[];
  SetTodos: React.Dispatch<React.SetStateAction<Task[]>>;
}
export const TodosContext = createContext<contextProps>({
  Todos: [],
  SetTodos: () => {},
});
export function Provider() {
  const [Todos,SetTodos] = useState<Task[]>([])
  return (
    <TodosContext.Provider value={{Todos, SetTodos }}>
      <TodoList />
    </TodosContext.Provider>
  );
}
