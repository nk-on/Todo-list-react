import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import TodoList from "./components/TodoList";
import { createContext } from "react";
export const nightModeContext = createContext(false)
function App() {
  const [nightMode, setNightMode] = useState(false);
  return (
    <>
        <div className={`w-[100%] ${nightMode ? 'dark':''}`}>
          <Heading nightMode = {nightMode} setNightMode={setNightMode} />
          <TodoList />
        </div>
    </>
  );
}

export default App;
