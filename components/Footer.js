import Link from 'next/link'
import NowPlaying from '/components/spotify/NowPlaying'

const FooterLink = ({ href, text }) => {
  return (
    <Link href={href}>
      <a className='text-gray-500 betterhover:hover:text-lightHighlight dark:betterhover:hover:text-darkHighlight transition-colors duration-300'>
        {text}
      </a>
    </Link>
  )
}

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8'>
      <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mb-8' />
      <NowPlaying />
      <div className='w-full max-w-2xl grid grid-cols-1 sm:text-center gap-4 pb-16 sm:grid-cols-4'>
        <FooterLink href='/' text={'Home'} />
        <Link href='/dashboard'>
          <a className='block md:hidden text-gray-500 betterhover:hover:text-lightHighlight dark:betterhover:hover:text-darkHighlight transition-colors duration-300'>
            Dashboard
          </a>
        </Link>
        <FooterLink href='/about' text={'About'} />
        <FooterLink href='/projects' text={'Projects'} />
        <FooterLink href='/blog' text={'Blog'} />
      </div>
    </footer>
  )
}

export default Footer
