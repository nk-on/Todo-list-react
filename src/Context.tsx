import { createContext } from "react";
import { Task } from "./App";
import TodoList from "./components/TodoList";
interface contextProps {
  Todos: Task[];
  SetTodos: React.Dispatch<React.SetStateAction<Task[]>>;
}
export const TodosContext = createContext<contextProps>({
  Todos: [],
  SetTodos: () => {},
});
export function Provider({Todos,SetTodos}:contextProps) {
  return (
    <TodosContext.Provider value={{ Todos, SetTodos }}>
      <TodoList />
    </TodosContext.Provider>
  );
}
