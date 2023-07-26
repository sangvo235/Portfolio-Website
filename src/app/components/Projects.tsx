"use client";
import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { BsGithub } from 'react-icons/bs';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import SlideUp from './SlideUp';

// Project Images
import portfolioUpdated from '../../Images/Project/portfolio_updated.png';
import rccaApp from '../../Images/Project/rcca_app.png';
import sociallyApp from '../../Images/Project/socially_app.gif';
import busApp from '../../Images/Project/bus_app.gif';
import quizPlatform from '../../Images/Project/quiz_platform.png';
import portfolioWebsite from '../../Images/Project/portfolio_website.png';
import parkingApp from '../../Images/Project/parking_system.png';

// Techology Icons
import reactIcon from '../../Images/Project/react_logo.svg';
import tailwindIcon from '../../Images/Project/tailwind_logo.svg';
import firebaseIcon from '../../Images/Project/firebase_logo.svg';
import figmaIcon from '../../Images/Project/figma_logo.svg';
import djangoIcon from '../../Images/Project/django_logo.svg';
import nativewindIcon from '../../Images/Project/nativewind_logo.svg';
import cssIcon from '../../Images/Project/css_logo.svg';
import htmlIcon from '../../Images/Project/html_logo.svg';
import jsIcon from '../../Images/Project/js_logo.svg';
import bootstrapIcon from '../../Images/Project/bootstrap_logo.svg';
import javaIcon from '../../Images/Project/java_logo.svg';
import gitIcon from '../../Images/Project/git_logo.svg';
import typescriptIcon from '../../Images/Project/typescript_logo.svg';
import vercelIcon from '../../Images/Project/vercel_logo.svg';
import bluejIcon from '../../Images/Project/bluej_logo.png';
import mantineIcon from '../../Images/Project/mantine_logo.png';
import astroIcon from '../../Images/Project/astro_logo.png';
import nextjsIcon from '../../Images/Project/nextjs_logo.png';

const projectsList = [
    {
        name: "Portfolio (Using Framework)",
        description: 'Developed a portfolio website using Nextjs and deployed on Vercel. \
                      Dark-mode feature, added animations and responsive design for cross-device compatibility.',
        image: portfolioUpdated, 
        tech: [nextjsIcon, typescriptIcon, reactIcon, mantineIcon, tailwindIcon, gitIcon, vercelIcon],
        github: 'https://github.com/JATTYz/TIP-Project-2023',
        link: 'https://github.com/JATTYz/TIP-Project-2023',
    }, 
    {
        name: "Rover Car Club of Australia",
        description: 'Develop a web application for RCCA. \
                      Allowing users to upload and search rover related records. \
                      Overview of database record, data analytics and submitted files pending approval enabled via admin dashboard.',
        image: rccaApp, 
        tech: [astroIcon, reactIcon, mantineIcon, tailwindIcon, firebaseIcon, gitIcon, figmaIcon],
        github: 'https://github.com/JATTYz/TIP-Project-2023',
        link: 'https://github.com/JATTYz/TIP-Project-2023',
    }, 
    {
        name: "Socially",
        description: 'React Native app created for UNIHACK 2023 to help encourage people to become social butterflies through topic and prompt generation. \
                      Completed in less than 48 hours!',
        image: sociallyApp, 
        tech: [reactIcon, nativewindIcon, tailwindIcon, djangoIcon],
        github: 'https://github.com/sangvo235/socially-repo',
        link: 'https://devpost.com/software/socially-xe5619',
    },  
    {
        name: "Melbourne Transit",
        description: 'Mobile app that digitalises the daily tasks of bus replacement ground staff by retrieving real-time data. \
        Built with React Native, Tailwind, Google Firebase/API and hosted on Expo.',
        image: busApp,
        tech: [reactIcon, tailwindIcon, firebaseIcon, figmaIcon],
        github: 'https://github.com/sangvo235/Melbourne_Transit',
        link: 'https://github.com/sangvo235/Melbourne_Transit',
    },
    {
        name: "Instatute Quiz Platform",
        description: 'A full-stack quiz platform aimed at increasing gamification. \
                      Has 3 different user types with dyamic creation of quizzes and questions.',
        image: quizPlatform,
        tech: [htmlIcon, cssIcon, jsIcon, bootstrapIcon, djangoIcon, figmaIcon],
        github: 'https://github.com/JATTYz/Quiz-Application-Django-Project',
        link: 'https://github.com/JATTYz/Quiz-Application-Django-Project',
    },
    {
        name: "Portfolio (No Framework)",
        description: 'Built with pure HTML/CSS/JS demonstrating comprehension on front-end web development. \
                      Includes parallax scrolling, hamburger menu and dynamic cross device compatibility.',
        image: portfolioWebsite,
        tech: [htmlIcon, cssIcon, jsIcon],
        github: 'https://github.com/sangvo235/sangvo235.github.io',
        link: 'https://sangvo235.github.io',
    },
    {
        name: "Parking Slot System",
        description: 'Transformed from console (text-based) to GUI through implementing Java Swing. \
                      Enabling users to search, display parking time, add or delete parking slots/cars.',
        image: parkingApp,
        tech: [javaIcon, bluejIcon],
        github: 'https://github.com/sangvo235/Parking_Slot_System_GUI',
        link: 'https://github.com/sangvo235/Parking_Slot_System_GUI',
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
                                                className='rounded-xl shadow-xl hover:opacity-70 max-h-72 w-full object-scale-down' 
                                            />
                                        </a>
                                    </div>
                                    <div className='mt-12 md:w-1/2'>
                                        <h1 className='text-3xl font-bold mb-4'>
                                            {project.name}
                                        </h1>
                                        <p className='text-md leading-7 mb-4 text-neutral-500 dark:text-neutral-100'>
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
                                                <BsGithub className='w-10 h-10 hover:text-sky-700 hover:-translate-y-1 transition-transform cursor-pointer' />
                                            </a>
                                            <a href={project.link} target='_black'>
                                                <BsArrowUpRightSquare className='w-10 h-10 hover:text-sky-700 hover:-translate-y-1 transition-transform cursor-pointer' />
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