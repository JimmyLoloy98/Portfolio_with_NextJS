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
      className="px-4 pt-40 pb-28 xl:px-0 flex justify-center my-40 lg:max-w-6xl lg:mx-auto"
    >
      <div className="flex flex-col items-center">
        <h2 className="mb-12 pb-1 text-2xl border-b-2 w-fit">Achievements</h2>

        <div className="flex flex-col gap-8">
          {data.map((item) => (
            <div className="flex items-center gap-4">
              <figure className="bg-blue-500 text-white rounded-full p-3 md:p-4">
                {getIcon(item.icon)}
              </figure>
              <div className="flex flex-col">
                <h3 className="uppercase font-sans2 tracking-wide font-bold text-sm md:text-base lg:text-lg">
                  {item.title}
                </h3>
                <p className="text-xs mb-1 md:text-sm font-sans2 font-semibold text-gray-500 tracking-wider capitalize">
                  {item.level}
                </p>
                <p className="text-sm md:text-base font-sans2 font-light text-gray-400 capitalize">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
