import React from "react";
import achievementList from "../data/achievement.json";
import { Github, Link, Award, Flag, Zap } from "./icons";

export function AchievementSection() {
  const data = [...achievementList.data];

  // [WIP] - refactor: load this functions in icons.jsx file
  function getIcon(nameIcon) {
    switch (nameIcon) {
      case "github":
        return <Github />;
      case "link":
        return <Link />;
      case "award":
        return <Award />;
      case "flag":
        return <Flag />;
      case "zap":
        return <Zap />;
      default:
        return null;
    }
  }
  // end of function

  return (
    <section
      id="achievements"
      className="px-4 md:px-4 xl:px-0 grid justify-center my-40 lg:max-w-6xl lg:mx-auto"
    >
      <h2 className="mb-12 pb-1 text-2xl border-b-2">Achievements</h2>

      <div className="flex flex-col gap-8">
        {data.map((item) => (
          <div className="flex items-center gap-4">
            <figure className="bg-blue-300 rounded-full p-3 md:p-4">
              {getIcon(item.icon)}
            </figure>
            <div className="flex flex-col gap-1">
              <h3 className="uppercase font-sans2 tracking-wide font-bold text-sm md:text-base lg:text-lg">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm font-semibold text-gray-500 tracking-wider capitalize">
                {item.level}
              </p>
              <p className="text-sm md:text-base font-sans2 font-light text-gray-500 capitalize">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
