import { createContext } from 'react';
import { Task } from './App';
interface contextProps {
  Todos:Task[],
  SetTodos:React.Dispatch<React.SetStateAction<Task[]>>,
}
export const TodosContext = createContext<contextProps>({
  Todos:[],
  SetTodos:() => {},
});
