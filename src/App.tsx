import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
function App() {
  const [nightMode, setNightMode] = useState(false);
  return (
    <>
        <div className={`w-[100%] ${nightMode ? 'dark':''}`}>
          <Heading nightMode = {nightMode} setNightMode={setNightMode} />
        </div>
    </>
  );
}

export default App;
