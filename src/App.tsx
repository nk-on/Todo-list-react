import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import { Provider} from './Context'
export interface Task {
  id: number;
  name: string;
  completed: boolean;
}
function App() {
  const [nightMode, setNightMode] = useState(false);
  const [Todos,SetTodos] = useState<Task[]>([])
  return (
    <>
      <div className= {`w-[100%] min-h-[100vh] ${nightMode && 'bg-[#171823]'} ${nightMode ? 'dark' : ''}`} >
          <Heading nightMode={nightMode} setNightMode={setNightMode} />
          <Provider Todos = {Todos} SetTodos = {SetTodos}/>
      </div>
    </>
  );
}

export default App;
