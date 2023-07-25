"use client"

import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai';
import Image from 'next/image';
import sangvo from '../../Images/sangvo.jpeg';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import { HiArrowDown } from 'react-icons/hi';

export const Bio = () => {
    
  return (

    <section id='home'>
    <div className='flex flex-col text-center items-center justify-center my-10 md:flex-row-reverse md:space-x-4 md:text-left md:py-32'>
        <div className='relative mx-auto rounded-full w-80 h-80 mt-10 md:w-2/5 md:mt-4'>
                <Image 
                    className='rounded-full'
                    src={sangvo} 
                    alt='sangvo' 
                />
            </div>

            <div className='my-6 font-semibold text-3xl md:text-5xl md:mt-2 md:w-4/5'>
                <h1 className='md:pr-32'>Hello, I'm Sang!</h1>

                <div className='inline-flex my-6'> 
                    I&#39;m a&nbsp;
                    <span className='text-teal-600'>
                    <Typewriter
                        options={{
                            strings: [
                                'Master of IT Student',
                                'Software Developer',
                                'Coffee Lover',
                                'World Traveler',
                                'Fragrance Collector',
                                'Gelato Connoisseur', 
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    </span>
                </div>

                <span className='text-5xl flex justify-center gap-8 text-gray-600 dark:text-gray-300 md:justify-start md:order-first md:gap-12'>
                    <Link 
                            to="projects"
                            className='text-white text-xl font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer'
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Projects
                    </Link> 
                    <a href="https://www.linkedin.com/in/sangvo235/" target="_blank" title="linkedin">
                        <AiFillLinkedin className="hover:text-sky-700"/>
                    </a>
                    <a href="https://github.com/sangvo235">
                        <AiFillGithub className="hover:text-sky-700" target="_blank" title="github"/>
                    </a>
                    <a href="mailto:sangvo235@gmail.com" target="_blank" title="email">
                        <AiFillMail className="hover:text-sky-700"/>
                    </a>
                </span>  
                
                     
            </div>
        </div>

        <div className='flex flex-row justify-center'>
            <Link 
                to='experience'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >
                <HiArrowDown size={35} className='animate-bounce' />
            </Link>    
        </div> 
    </section>
    )
}

export default Bio