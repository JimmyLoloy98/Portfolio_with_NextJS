import React, { useState } from "react";
import { Mail, Github, Linkedin, Dark, Light } from "./components/icons.jsx";

function App() {
  return (
    <div className="flex h-screen">
      <nav className="w-full px-20 h-20 flex justify-between shadow-md">
        <a className="flex place-items-center" href="/">
          <Github />
        </a>

        <ul className="text-xs font-normal flex place-items-center gap-10 uppercase">
          {[
            ["home", "/home"],
            ["experience", "/experience"],
            ["achievements", "/achievements"],
            ["about", "/about"],
            ["blogs", "/blogs"],
            ["talks", "/talks"],
            ["contact", "/contact"],
          ].map(([title, url]) => (
            <li>
              <a href={url} className="hover:text-blue-700 hover:underline">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default App;
