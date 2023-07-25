import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import sangvo from '../Images/sangvo.jpeg';
import Experience from './components/experience';
import Bio from './components/Bio';

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      < Bio />
    </main>
  )
}
