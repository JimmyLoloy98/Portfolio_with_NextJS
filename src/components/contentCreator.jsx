import React from "react";
import dataList from "../data/content.json";

export function ContentCreator() {
  const data = [...dataList.data];

  return (
    <section
      id="content"
      className="px-4 pt-32 pb-28 md:px-4 xl:px-0 flex flex-col items-center lg:max-w-6xl lg:mx-auto"
    >
      <h2 className="mb-12 pb-1 text-2xl border-b-2">Blogs & Talks</h2>

      <div className=" m-auto flex flex-wrap gap-10 justify-center md:justify-around">
        {data.map((item) => (
          <div className="w-[21rem] border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-gray-400">
            <figure className="relative">
              <img src={item.imageUrl} alt={item.title} />
              <span className="absolute top-5 left-[15.7rem] px-3 py-0.5 rounded-full border text-white capitalize">
                {item.type}
              </span>
            </figure>
            <div className="p-4">
              <a href="#">
                <h5 className="mb-2 text-lg md:text-xl font-bold text-slate-700 hover:underline hover:text-slate-800 capitalize">
                  {item.title}
                </h5>
              </a>
              <p className="mb-4 text-sm text-gray-500 font-sans2">
                {item.date}
              </p>
              <div className="flex gap-4 flex-wrap">
                {item.tags.map((tag) => (
                  <span className="px-3 py-2 text-xs md:text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 lowercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
