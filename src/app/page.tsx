import Image from 'next/image'
import {
  SiGithub,
  SiInstagram,
  SiYoutube
} from 'react-icons/si'

import Spotlight from '@/components/spotlight'

import PrimaryLinks from './primary-links'

const links = [
  {
    icon: <SiYoutube className='text-zinc-300' />,
    title: 'YouTube',
    url: 'https://www.youtube.com/'
  },
  {
    icon: <SiInstagram className='text-zinc-300' />,
    title: 'Instagram',
    url: 'https://instagram.com/'
  },
  {
    icon: <SiGithub className='text-zinc-300' />,
    title: 'Github',
    url: 'https://github.com/Samson2000-AI'
  }
]

const HomePage = () => {
  return (
    <>
      <div className='relative mx-auto flex flex-col items-center justify-center gap-4 pb-10 pt-24'>
        <Spotlight className='-top-4 left-56' />
        <Image
          src='/samson2000.jpg'
          width={90}
          height={90}
          alt='Logo'
          className='rounded-full'
          priority
        />
        <h1 className='text-xl font-semibold'>AI</h1>
        <p className='text-[#a1a1a1]'>Samson2000 AI Bot</p>
      </div>
      <PrimaryLinks />
      <div className='flex flex-col gap-4 py-3'>
        {links.map((link) => {
          const { icon, title, url } = link

          return (
            <a
              key={url}
              href={url}
              className='relative flex h-14 w-full items-center justify-center rounded-xl border border-zinc-700 bg-[#151414] px-8 py-4 transition-colors duration-300 hover:border-zinc-500'
              target='_blank'
              rel='noopener, noreferrer'
            >
              <div className='absolute left-8'>{icon}</div>
              <div className='text-zinc-100'>{title}</div>
            </a>
          )
        })}
      </div>
    </>
  )
}

export default HomePage
