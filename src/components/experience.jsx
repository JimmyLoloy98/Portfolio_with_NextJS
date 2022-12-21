import React from "react";
import experienceList from "../data/experience.json";
import { Github, Link } from "./icons";

export function ExperienceSection() {
  const data = [...experienceList.data];

  return (
    <section
      id="experience"
      className="mb-8 grid place-items-center lg:max-w-6xl lg:mx-auto"
    >
      <h2 className="mb-8 pb-1 text-2xl border-b-2">Experience</h2>

      {data.map((item) => (
        <div className="mb-8 px-4 md:px-4 xl:px-0 w-full md:flex md:flex-row">
          <figure className="relative w-60 h-44 md:w-72 md:h-48 rounded-lg overflow-hidden">
            <img
              className="object-cover h-full w-full hover:blur-sm transition duration-300 ease-in-out focus-within:blur-sm"
              src={item.imageUrl}
              alt={`image of ${item.title}`}
            />
            <span className="grid m-auto grid-cols-2 gap-6 absolute top-1/2 left-1/2 -mx-10">
              <a href={item.links.live} target="_blank">
                <Link color="white" />
              </a>
              <a href={item.links.repositorie} target="_blank">
                <Github color="white" />
              </a>
            </span>
          </figure>
          <figcaption className="mt-2 md:mt-0 md:ml-5 flex flex-col gap-1 border-b-2 md:border-b-0 pb-4 md:w-full md:max-w-5xl">
            <h3 className="uppercase font-bold text-base md:text-lg lg:text-xl">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm lg:text-base font-sans2 font-semibold text-gray-600 capitalize">
              {item.type}
            </p>
            <p className="text-sm md:text-base font-sans2 font-light text-gray-500">
              {item.description} My own personal website as a software
              developer. lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, quae. lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, quae.
            </p>
          </figcaption>
        </div>
      ))}
    </section>
  );
}
