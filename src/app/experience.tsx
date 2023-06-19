"use client";
import { Group, Text, Accordion } from '@mantine/core';
import Image, { StaticImageData } from 'next/image';
import swinburne from '../Images/swinburne_logo.jpg';
import deloitte from '../Images/deloitte_logo.jpeg';
import easyMonitor from '../Images/easy_monitor_logo.jpeg';
import datacom from '../Images/datacom_logo.png';

const charactersList = [
  {
    id: 'swinburne',
    image: swinburne,
    title: 'Master of Information Technology (Software Development)',
    company: 'Swinburne University of Technology',
    date: 'Feb 2022 - Nov 2023',
    description: 'Grade: High Distinction (HD), GPA: 4.0, WAM: 85.625',
  },

  {
    id: 'digital',
    image: swinburne,
    title: 'Machine Learning Intern',
    company: 'Swinburne University of Technology',
    date: 'Feb 2023 - Jun 2023',
    description: (
      <ul>
        <li> ▪ Leveraged machine learning techniques to predict network performance for a real-time roadside asset management solution developed by Swinburne’s Digital Innovation Lab.</li>
        <li> ▪ Utilized python libraries (Pandas, Scikit-learn, TensorFlow), Jupyter, and SQL.</li>
      </ul>
    ),
  },

  {
    id: 'easyMonitor',
    image: easyMonitor,
    title: 'Software Engineer Intern',
    company: 'Easy Monitor',
    date: 'Feb 2023 - Apr 2023',
    description: (
      <ul>
        <li> ▪ Recipient of the SummerTech Live Internship supported by the Victorian State Government.</li>
        <li> ▪ Development of a full-stack application using Next.js, TypeScript, tRPC, Prisma and AWS.</li>
      </ul>
    ),
  },

  {
    id: 'deloitte',
    image: deloitte,
    title: 'Digital & Technology - Risk Advisory Intern',
    company: 'Deloitte',
    date: 'Nov 2022 - Feb 2023',
    description: (
      <ul>
        <li> ▪ Achieved AWS Certified Cloud Practitioner through Deloitte Cloud Guild.</li>
        <li> ▪ Consolidated knowledge of AWS Cloud and its core services, security, architecture, pricing, and support.</li>
        <li> ▪ Familiarity with cloud computing security and data protection, including secure architecture design, network security, and incident response planning.</li>
        <li> ▪ Knowledge of software development life cycle (SDLC) security best practices and the ability to integrate security into the SDLC.</li>
        <li> ▪ Assisted in the development, implementation and maintenance of SOX controls and processes in accordance with the Sarbanes-Oxley Act.</li>
        <li> ▪ Assisted in the successful implementation of a comprehensive business continuity plan that included disaster recovery strategies for various scenarios such as natural disasters, data breaches, and power outages.</li>
      </ul>
    ),  
  },

  {
    id: 'datacom',
    image: datacom,
    title: 'Service Desk Analyst',
    company: 'Datacom',
    date: 'Feb 2022 - Aug 2022',
    description: (
      <ul>
        <li> ▪ Managing IT incidents and service requests to provide technical support for end-users.</li>
        <li> ▪ Understanding of technical infrastructure projects and related technology dependencies.</li>
      </ul>
    ),  
  },

];

interface AccordionLabelProps {
  image: StaticImageData;
  title: string;
  company: string;
  date: string;
  description: string | any ;
}

function AccordionLabel({ image, title, company, date, description }: AccordionLabelProps) {
  return (
    <Group noWrap>
      <Image src={image} alt='company-logo' className='rounded-full' width={100}/>
      <div>
        <Text>{title}</Text>
        <Text size="sm" weight={400}>
          {company}
        </Text>
        <Text size="sm" color="dimmed" weight={400}>
          {date}
        </Text>
      </div>
    </Group>
  );
}

export default function Experience() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.title}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm" mx={32}>{item.description}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));
  
    return (
      <Accordion 
        chevronPosition="right" 
        variant="contained" 
        transitionDuration={500}>
          {items}
      </Accordion>
  );
}




