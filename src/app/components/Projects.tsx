"use client";
import React from 'react'
import Image, { StaticImageData } from 'next/image';
import quizPlatform from '../../Images/Project/quiz_platform.png';
import portfolioWebsite from '../../Images/Project/portfolio_website.png';
import busApp from '../../Images/Project/bus_app.gif';
import reactIcon from '../../Images/Project/react_logo.svg';
import tailwindIcon from '../../Images/Project/tailwind_logo.svg';
import firebaseIcon from '../../Images/Project/firebase_logo.svg';
import figmaIcon from '../../Images/Project/figma_logo.svg';
import { BsGithub } from 'react-icons/bs';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import SlideUp from './SlideUp';

const projectsList = [
    {
        name: "Socially",
        description: 'More people are suffering from social anxiety post-COVID. \
                    This mobile app created with React Native, Tailwind CSS, Native Wind & Django (REST API) aims to help users \
                    overcome their social anxiety by providing them with a platform to practice their social skills.',
        image: quizPlatform,
        tech: [reactIcon, tailwindIcon, firebaseIcon, figmaIcon],
        github: 'https://github.com/sangvo235/socially-repo',
        link: 'https://devpost.com/software/socially-xe5619',
    },  
    {
        name: "Bus Replacement Mobile App",
        description: 'Mobile app that digitalises the daily tasks of bus replacement ground staff by retrieving real-time data. \
        Built with React Native, Tailwind, Google Firebase/API and hosted on Expo.',
        image: portfolioWebsite,
        tech: [reactIcon, tailwindIcon, firebaseIcon, figmaIcon],
        github: 'https://github.com/sangvo235/Melbourne_Transit',
        link: 'https://github.com/sangvo235/Melbourne_Transit',
    },
]

const Projects = () => {
  return (
    <section id="projects">
        <div className='my-12 pb-12 md:pt-16 md:pb-48'>
            <h1 className='text-center font-semibold text-3xl my-10 md:text-5xl'>Projects</h1>
            <hr className="w-6 h-1 mx-auto mb-12 bg-teal-500 border-0 rounded"></hr>

            <div className='flex flex-col space-y-28'>
                {projectsList.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset='-300px 0px -300px 0px'>
                                <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                                    <div className='mt-8 md:w-1/2'>
                                        <a href={project.link} target='_blank' >
                                            <Image 
                                                src={project.image} 
                                                alt='project-image' 
                                                className='rounded-xl shadow-xl hover:opacity-70' 
                                                width={1000} 
                                                height={1000} 
                                            />
                                        </a>
                                    </div>
                                    <div className='mt-12 md:w-1/2'>
                                        <h1 className='text-3xl font-bold mb-4'>
                                            {project.name}
                                        </h1>
                                        <p className='text-md leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                                            {project.description}
                                        </p>
                                        <div className='flex flex-row mb-4 align-bottom space-x-4'>
                                            {project.tech.map((tech, idx) => {
                                                return (
                                                    <Image 
                                                        src={tech} 
                                                        alt='tech-icon' 
                                                        className='inline-block object-scale-down w-10 h-10' 
                                                        key={idx}
                                                    />
                                                )
                                            }
                                            )}
                                        </div>
                                        <div className='flex flex-row align-bottom space-x-4'>
                                            <a href={project.github} target='_blank'>
                                                <BsGithub size={30} className='hover:text-sky-700 hover:-translate-y-1 transition-transform cursor-pointer' />
                                            </a>
                                            <a href={project.link} target='_black'>
                                                <BsArrowUpRightSquare size={30} className='hover:text-sky-700 hover:-translate-y-1 transition-transform cursor-pointer' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    )
                })}
            </div>    
        </div>    
    </section>
  )
}

export default Projects