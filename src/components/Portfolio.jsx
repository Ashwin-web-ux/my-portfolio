import React from 'react';
import Todo from "../assets/Portfolio/Todo-App.png";
import Weather from "../assets/Portfolio/Weather.png";
import Games from "../assets/Portfolio/Games.png"

const Portfolio = () => {
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {/* Card 1 */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <a href="https://Ashwin-web-ux.github.io/todo-app/"> <img src={Todo} alt="Todo App" className='rounded-md duration-200 hover:scale-105' /></a>
           
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Deepseek</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>React</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={Games} alt="Node Installation" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={Weather} alt="Navigation Bar" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={Games} alt="React Parallax" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>

          {/* Card 5 */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={Games} alt="Weather App" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>

          {/* Card 6 */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={Games} alt="Weather Application" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>JavaScript</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>HTML,CSS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;