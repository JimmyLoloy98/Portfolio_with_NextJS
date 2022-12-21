import React, { useState } from "react";
import { menuList, Navbar } from "./components/navbar.jsx";
import { Footer } from "./components/footer.jsx";
import { Github, Linkedin, Twitter, Mail } from "./components/icons.jsx";

function App() {
  return (
    <div>
      <Navbar />

      <header
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center md:px-16 md:flex-row-reverse md:items-center md:justify-between lg:max-w-5xl lg:mx-auto"
      >
        <figure className="w-60 md:w-72 lg:w-80 rounded-full overflow-hidden">
          <img
            src="https://res.cloudinary.com/dmlv9g4kn/image/upload/v1671589949/jloloy_profile_1_brh7n2.png"
            alt="foto de Jimmy Loloy"
          />
        </figure>

        <section className="mt-6 flex flex-col items-center">
          <p className="px-4 py-1 text-sm text-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl bg-cyan-600">
            Hello!, I'm
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl">Jimmy Loloy</h1>

          <code className="mt-2 md:text-lg text-gray-500">
            Software Developer
          </code>

          <ul className="mt-6 flex gap-6 md:gap-7">
            <li className="p-2 md:p-3 bg-blue-500 rounded-full">
              <a href="http://github.com/JimmyLoloy98" target="_blank">
                <Github color="white" />
              </a>
            </li>
            <li className="p-2 md:p-3 bg-blue-500 rounded-full">
              <a href="http://linkedin.com/in/JimmyLoloy98" target="_blank">
                <Linkedin color="white" />
              </a>
            </li>
            <li className="p-2 md:p-3 bg-blue-500 rounded-full">
              <a href="http://twitter.com/JimmyLoloy98" target="_blank">
                <Twitter color="white" />
              </a>
            </li>
            <li className="p-2 md:p-3 bg-blue-500 rounded-full">
              <a href="mailto:loloy.laurencio@gmail.com" target="_blank">
                <Mail color="white" />
              </a>
            </li>
          </ul>
        </section>
      </header>

      {/* {menuList.map(([title, url]) => (
        <div
          className="bg-gray-50 h-screen scroll-smooth"
          id={url.replace("#", "")}
        >
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            {title}
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default App;
