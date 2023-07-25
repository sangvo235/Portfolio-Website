"use client";
import { Card, Text, Badge, Button, Group } from '@mantine/core';
import Image, { StaticImageData } from 'next/image';
import swinburne from '../../Images/swinburne_logo.jpg';
import tum from '../../Images/tum_logo.jpeg';
import monash from '../../Images/monash_logo.jpeg';

const educationList = [
  {
    id: 'swinburne',
    image: swinburne,
    degree: 'Master of Information Technology (Software Development)',
    name: 'Swinburne University of Technology',
    date: 'Feb 2022 - Current',
    description: 'GPA: 4.0/4.0, WAM: 86.27/100',
  },

  {
    id: 'tum',
    image: tum,
    degree: 'Winter Semester Exchange (Master of Information Technology)',
    name: 'Technical University of Munich',
    date: 'Oct 2023 - Mar 2024',
    description: '',
  },

  {
    id: 'monash',
    image: monash,
    degree: 'Bachelor of Commerce (Finance)',
    name: 'Monash University',
    date: 'Feb 2017 - Nov 2021',
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
      <Card shadow="xl" padding="xl" radius="md" withBorder={true} key={item.id} >
        <CardLabel {...item} />
      </Card>
    ));
    
      return (
        <section id="education">
            <div className='my-12 pb-12 md:pt-16 md:pb-48'>
                <h1 className='text-center font-semibold text-3xl mb-12 md:text-5xl'>Education</h1>
                {items}
            </div>
        </section>
    );
  }