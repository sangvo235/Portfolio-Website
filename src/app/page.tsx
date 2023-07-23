import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import sangvo from '../Images/sangvo.jpeg';
import Experience from './components/experience';

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
    {/* <header className='w-full mx-auto px-4 bg-white shadow fixed top-0 z-50 sm:px-20 dark:border-stone-900 dark:border-b dark:border-stone-600'> */}
{/* 
      <section className='min-h-screen'>
        <div className='text-center p-10 pt-28'>
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
        < Experience />

      </section> */}

    </main>
  )
}
