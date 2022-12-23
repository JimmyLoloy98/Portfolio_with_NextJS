import React from "react";
import { menuList, Navbar } from "./components/navbar.jsx";
import { Footer } from "./components/footer.jsx";
import { ExperienceSection } from "./components/experience.jsx";
import {HeroSection} from "./components/hero.jsx";
import { AchievementSection } from "./components/achievement.jsx";
import { About } from "./components/about.jsx";
import { ContentCreator } from "./components/contentCreator.jsx";

import {
  ChevronDown,
} from "./components/icons.jsx";

function App() {
  return (
    <div>
      <Navbar />

      <HeroSection />

      <div className=" relative bottom-20 flex justify-center items-center h-14">
        <a href="#experience" className="p-2 rounded-full animate-bounce">
          <ChevronDown />
        </a>
      </div>

      <ExperienceSection />

      <AchievementSection />

      <About />

      <ContentCreator />

      <Footer />
    </div>
  );
}

export default App;
