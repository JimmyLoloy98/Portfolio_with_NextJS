import React, { useState } from "react";
import { Github, Close, Menu } from "./icons.jsx";

export const menuList = [
  ["home", "/"],
  ["experience", "#experience"],
  ["achievements", "#achievements"],
  ["about", "#about"],
  ["content", "#content"],
  ["contact", "#contact"],
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuDropdownHandler = () => {
    setMenuOpen((open) => !open);
  };

  return (
    <nav className="fixed z-10 w-full lg:mx-0 bg-white shadow-md">
      {!menuOpen ? (
        <div className="mx-auto lg:max-w-6xl overflow-auto px-4 sm:px-6 h-20 flex items-center justify-between md:justify-start">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a className="flex place-items-center" href="/">
              <Github />
            </a>
          </div>

          <div className="-my-2 md:hidden">
            <button
              onClick={menuDropdownHandler}
              type="button"
              className="inline-flex place-items-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <Menu />
            </button>
          </div>

          <ul className="hidden text-xs font-normal text-gray-500 md:flex justify-end md:flex-1 flex-col md:flex-row md:place-items-center gap-4 md:gap-10 uppercase">
            {menuList.map(([title, url]) => (
              <li>
                <a href={url} className="hover:text-gray-900">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="absolute inset-x-0 top-0 origin-top-right transform transition md:hidden">
          <div className="p-5 divide-y-2 divide-gray-50 bg-white shadow-lg">
            <div className="flex items-center justify-between">
              <Github />

              <button
                onClick={menuDropdownHandler}
                type="button"
                className="inline-flex place-items-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <span className="sr-only">Close menu</span>
                <Close />
              </button>
            </div>

            <ul className="mt-6 text-xs font-normal uppercase grid gap-y-3">
              {menuList.map(([title, url]) => (
                <li className="flex items-center rounded-md p-3 hover:bg-gray-100 hover:text-blue-700 cursor-pointer">
                  <a
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    href={url}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
