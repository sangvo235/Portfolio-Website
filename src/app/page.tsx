import Bio from './components/Bio';
import Experience from './components/experience';
import Education from './components/Education';

export const metadata = {
  title: 'Sang Vo',
  description: "Sang Vo's Personal Portfolio",
  icons: {
    icon: '/favicon.ico?v=4',
  },
}

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      < Bio />
      < Experience />
      < Education />
    </main>
  )
}
