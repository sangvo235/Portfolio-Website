import Bio from './components/Bio';
import Experience from './components/experience';

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      < Bio />
      < Experience />
    </main>
  )
}
