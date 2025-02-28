import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import { Provider} from './components/Context'
export interface Task {
  id: number;
  name: string;
  completed: boolean;
}
function App() {
  const [nightMode, setNightMode] = useState(false);
  return (
    <>
      <div className= {` w-[100%] min-h-[100vh] ${nightMode && 'bg-[#171823]'} ${nightMode ? 'dark' : ''}`} >
          <Heading nightMode={nightMode} setNightMode={setNightMode} />
          <Provider />
      </div>
    </>
  );
}

export default App;
