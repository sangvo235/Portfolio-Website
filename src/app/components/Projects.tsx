"use client";
import React from 'react'
import Image, { StaticImageData } from 'next/image';
import quizPlatform from '../../Images/Project/quiz_platform.png';
import busApp from '../../Images/Project/bus_app.gif';
import reactIcon from '../../Images/Project/react_logo.svg';
import tailwindIcon from '../../Images/Project/tailwind_logo.svg';
import firebaseIcon from '../../Images/Project/firebase_logo.svg';
import figmaIcon from '../../Images/Project/figma_logo.svg';

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
        image: busApp,
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
                            <div className='flex flex-col md:flex-row md:space-x-12'>
                                <div className='md:w-1/2'>
                                    <Image 
                                        src={project.image} 
                                        alt='project-image' 
                                        className='rounded-xl shadow-xl hover:opacity-70' 
                                        width={1000} 
                                        height={1000} 
                                    />
                                </div>
                                <div className='md:w-1/2'></div>
                            </div>
                        </div>
                    )
                })}
            </div>    
        </div>    
    </section>
  )
}

export default Projects