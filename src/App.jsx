import React, { useState } from "react";
import { menuList, Navbar } from "./components/navbar.jsx";
import { Footer } from "./components/footer.jsx";
import { ExperienceSection } from "./components/experience.jsx";
import {HeroSection} from "./components/hero.jsx";
import { AchievementSection } from "./components/achievement.jsx";

import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ChevronDown,
} from "./components/icons.jsx";

function App() {
  return (
    <div>
      <Navbar />

      <HeroSection />

      <div className=" relative bottom-16 flex justify-center items-center h-14">
        <a href="#experience" className="p-2 rounded-full animate-bounce">
          <ChevronDown />
        </a>
      </div>

      <ExperienceSection />

      <AchievementSection />

      <Footer />

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
