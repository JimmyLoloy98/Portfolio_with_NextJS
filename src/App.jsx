import { useState } from "react";
import { Mail, Github, Linkedin, Dark, Light } from "./components/icons.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="text-3xl text-slate-600 text-center">{count}</div>
        <button
          className="px-6 py-2 flex gap-4 rounded bg-blue-500 hover:bg-blue-700 text-white"
          type="button"
          onClick={() => setCount((count) => count + 1)}
        >
          <Mail />
          <Github />
          <Linkedin />
          <Dark />
          <Light />
        </button>
      </div>
    </div>
  );
}

export default App;
