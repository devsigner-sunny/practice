import React from "react";
import { VscSearch } from "react-icons/vsc";

export default function Card({ ...props }) {
  const { title, logo, link, hasIcon } = props;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 text-center rounded-lg hover:bg-slate-500"
    >
      <div className="relative flex items-center justify-center p-2 mb-2 rounded-lg bg-slate-700">
        <div className="flex items-center justify-center w-20 h-20">
          <img className="w-12" src={logo} alt={`${title} logo`}/>
        </div>
        {hasIcon &&
            <div className="absolute p-2 rounded-full bg-sky-500 -bottom-2 -right-2">
              <VscSearch />
            </div>
            }
        </div>
     <p className="text-center text-white">{title}</p>
    </a>
  );
}
