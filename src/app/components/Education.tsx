"use client";
import { Card, Text, Group } from '@mantine/core';
import Image, { StaticImageData } from 'next/image';
import swinburne from '../../Images/swinburne_logo.jpg';
import tum from '../../Images/tum_logo.jpeg';
import monash from '../../Images/monash_logo.jpeg';
import { HiArrowDown } from 'react-icons/hi';
import { Link } from 'react-scroll';
import SlideUp from './SlideUp';

const educationList = [
  {
    id: 'swinburne',
    image: swinburne,
    degree: 'Master of Information Technology (Software Development)',
    name: 'Swinburne University of Technology',
    date: 'Feb 2022 - Jul 2024',
    description: 'GPA: 4.0/4.0, WAM: 86.27/100',
  },

  {
    id: 'tum',
    image: tum,
    degree: 'Master of Informatics - Exchange Program',
    name: 'Technical University of Munich',
    date: '2023 - 2024',
    description: (
      <ul>
        <li>▪ Collaborated with Maltego Technologies to enhance a big data analytics tool using Vite.js.</li>
        <li>▪ Developed frontend interface, integrated APIs, and participated in weekly stand-ups.</li>
        <li>▪ Adopted agile sprint cycles and project management tools like Slack, Notion and Linear.</li>
      </ul>
    ),  
  },

  {
    id: 'monash',
    image: monash,
    degree: 'Bachelor of Commerce (Finance)',
    name: 'Monash University',
    date: '2017 - 2021',
    description: '',
  },
];

  interface CardLabelProps {
    image: StaticImageData;
    degree: string;
    name: string;
    date: string;
    description: string | any ;
  }

  function CardLabel({ image, degree, name, date, description}: CardLabelProps) {
    return (
      <Group noWrap>
        <Image src={image} alt='company-logo' className='rounded-full' width={100} height={100} />
      <div>
            <Text>{degree}</Text>
            <Text size="sm" weight={400}>
                {name}
            </Text>
            <Text size="sm" color="dimmed" weight={400}>
                {date}
            </Text>
            <div className='py-2'>
                {description && <Text size="sm" weight={400}>{description}</Text>}
            </div>
        </div>
      </Group>
    );
  }

  export default function Education() {
    const items = educationList.map((item) => (  
      <div className='pb-4'>
        <SlideUp offset='-300px 0px -300px 0px'>
          <Card shadow="sm" mt="sm" pb="lg" radius="md" withBorder={true} key={item.id} className='animate-slideUpCubiBezier animation-delay-2'>
            <CardLabel {...item} />
          </Card>
        </SlideUp>
      </div>
    ));
    
      return (
        <section id="education">
            <div className='my-12 pb-12 md:pt-16 md:pb-48'>
                <h1 className='text-center font-semibold text-3xl my-10 md:text-5xl'>Education</h1>
                <hr className="w-6 h-1 mx-auto mb-12 bg-teal-500 border-0 rounded"></hr>
                {items}
                <SlideUp offset='-300px 0px -300px 0px'>
                  <div className='flex flex-row justify-center mt-12 animate-slideUpCubiBezier animation-delay-2'>
                      <Link 
                          to='projects'
                          activeClass='active'
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={500}
                      >
                          <HiArrowDown size={35} className='animate-bounce' />
                      </Link>    
                  </div>    
                </SlideUp>
            </div>
        </section>
    );
  }