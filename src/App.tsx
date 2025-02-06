import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import TodoList from './components/TodoList';
import { createContext } from 'react';
interface Task {
  id: number;
  name: string;
  completed: boolean;
}
interface contextProps {
  Todos:Task[],
  SetTodos:React.Dispatch<React.SetStateAction<Task[]>>,
}
export const TodosContext = createContext<contextProps>({
  Todos:[],
  SetTodos:() => {},
});
function App() {
  const [nightMode, setNightMode] = useState(false);
  const [Todos,SetTodos] = useState<Task[]>([])
  return (
    <>
      <div className= {`w-[100%] min-h-[100vh] ${nightMode && 'bg-[#171823]'} ${nightMode ? 'dark' : ''}`} >
          <Heading nightMode={nightMode} setNightMode={setNightMode} />
          <TodosContext.Provider value={{Todos,SetTodos}}>
            <TodoList />
          </TodosContext.Provider>
      </div>
    </>
  );
}

export default App;
