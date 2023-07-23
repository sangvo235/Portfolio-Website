"use client";
import { Group, Text, Accordion, Badge } from '@mantine/core';
import Image, { StaticImageData } from 'next/image';
import swinburne from '../../Images/swinburne_logo.jpg';
import deloitte from '../../Images/deloitte_logo.jpg';
import easyMonitor from '../../Images/easy_monitor_logo.jpeg';
import datacom from '../../Images/datacom_logo.png';

const experienceList = [
  {
    id: 'swinburne',
    image: swinburne,
    title: 'Master of Information Technology (Software Development)',
    company: 'Swinburne University of Technology',
    date: 'Feb 2022 - Current',
    description: 'GPA: 4.0/4.0, WAM: 86.27/100',
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
    skills: ['Machine Learning', 'Deep Learning', 'Python', 'Pandas', 'Scikit-Learn', 'TensorFlow', 'SQL', 'Data Analysis'],
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
    skills: ['Git', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'tRPC', 'Prisma', 'Asana', 'Slack'],
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
    skills: ['Amazon Web Services (AWS)', 'IT Controls', 'Control Framework', 'Software Development Life Cycle (SDLC)', 'Cloud Security', 'Business Continuity Planning', 'Disaster Recovery', 'ISO Standards', 'Sarbanes-Oxley Act']
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
    skills: ['SAP Products', 'IT Service Management', 'Service-Level Agreements (SLA)', 'Active Directory', 'Technical Support', 'Microsoft Office', 'ServiceNow', 'Citrix', 'Microsoft Azure'],
  },

];

interface AccordionLabelProps {
  image: StaticImageData;
  title: string;
  company: string;
  date: string;
  description: string | any ;
  skills?: string[];
}

function AccordionLabel({ image, title, company, date, description, skills}: AccordionLabelProps) {
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
  const items = experienceList.map((item) => (
    <Accordion.Item value={item.id} key={item.title}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm" mx={32}>{item.description}</Text>
        {item.skills && (
          <div className="mt-4 text-center">
            {item.skills.map((skill) => (
              <Badge key={skill} variant="gradient" gradient={{ from: 'cyan', to: 'teal' }} className="mr-2 mb-2">
                {skill}
              </Badge>
            ))}
          </div>
        )}
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




