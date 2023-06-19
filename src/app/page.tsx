"use client";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import sangvo from '../Images/sangvo.jpeg';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
  <div className={darkMode ? 'dark' : ''}>
    <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl dark:text-white'>Sang Vo</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill 
                className='cursor-pointer text-2xl'
                onClick={() => setDarkMode(!darkMode)}
                />
            </li>
            <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a></li>
          </ul>
        </nav>

        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-md'>Hi, I'm Sang Vo</h2>
          <h3 className='text-2xl py-2 dark:text-white'>Software Engineer</h3>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-100'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quam velit qui. Illum, consequuntur ex rerum excepturi quia voluptas eum ducimus minus reprehenderit beatae? Quis consectetur rerum reprehenderit maxime suscipit?</p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300'>
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
        <div className='relative mx-auto rounded-full w-80 h-80 mt-10'>
          <Image src={sangvo} alt='sangvo' className='rounded-full'/>
        </div>
      </section>
      
      <section>

      </section>

    </main>
    </div>
  )
}
