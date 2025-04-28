import React from 'react';
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import TailwindCSS from "../assets/tailwind.png";
import Reactimg from "../assets/react.png";
import Github from "../assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills & Tools</p>
          <p className="py-6">These are the technologies I've worked with and am currently learning.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          
          {/* HTML */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500">
            <img src={HTML} alt="HTML" className="w-20 mx-auto" />
            <p className="mt-4">HTML</p>
          </div>

          {/* CSS */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500">
            <img src={CSS} alt="CSS" className="w-20 mx-auto" />
            <p className="mt-4">CSS</p>
          </div>

          {/* JavaScript */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500">
            <img src={JavaScript} alt="JavaScript" className="w-20 mx-auto" />
            <p className="mt-4">JavaScript</p>
          </div>

          {/* TailwindCSS */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-400">
            <img src={TailwindCSS} alt="TailwindCSS" className="w-20 mx-auto" />
            <p className="mt-4">Tailwind CSS</p>
          </div>

          {/* GitHub */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-400">
            <img src={Github} alt="GitHub" className="w-20 mx-auto" />
            <p className="mt-4">GitHub</p>
          </div>

          {/* React */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600">
            <img src={Reactimg} alt="React" className="w-20 mx-auto" />
            <p className="mt-4">React</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
