import React, { useState } from 'react';
import { FaBars, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Small screens: Floating Button */}
      <div className="flex lg:hidden fixed bottom-8 right-8 flex-col items-end space-y-2 z-50">
        {/* Links */}
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col space-y-3 mb-2"
          >
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-gray-700 p-2 rounded-full text-white hover:bg-blue-600">
              <FaLinkedin size={25} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-gray-700 p-2 rounded-full text-white hover:bg-gray-500">
              <FaGithubSquare size={25} />
            </a>
            <a href="mailto:example@example.com" target="_blank" rel="noreferrer" className="bg-gray-700 p-2 rounded-full text-white hover:bg-red-500">
              <IoMdMail size={25} />
            </a>
            <a href="/resume.pdf" download target="_blank" rel="noreferrer" className="bg-gray-700 p-2 rounded-full text-white hover:bg-green-600">
              <GrNotes size={25} />
            </a>
          </motion.div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-gradient-to-r from-cyan-400 p-4 rounded-full text-white shadow-lg hover:bg-blue-500 transition duration-500"
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Large screens: Sidebar Links */}
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>

          {/* LinkedIn */}
          <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 rounded-tr-md hover:shadow-[0_0_20px_5px_#0077b5]">
            <a
              href="https://linkedin.com"
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          {/* GitHub */}
          <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 hover:shadow-[0_0_20px_5px_#0077b5]">
            <a
              href="https://github.com"
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FaGithubSquare size={30} />
            </a>
          </li>

          {/* Mail */}
          <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 hover:shadow-[0_0_20px_5px_#0077b5]">
            <a
              href="mailto:example@example.com"
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              Mail <IoMdMail size={30} />
            </a>
          </li>

          {/* Resume */}
          <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 rounded-br-md hover:shadow-[0_0_20px_5px_#0077b5]">
            <a
              href="/resume.pdf"
              className="flex justify-between items-center w-full text-white"
              download
              target="_blank"
              rel="noreferrer"
            >
              Resume <GrNotes size={30} />
            </a>
          </li>

        </ul>
      </div>
    </>
  );
};

export default SocialLinks;
