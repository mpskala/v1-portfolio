import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8'>
      <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mb-8' />
      {/* <NowPlaying /> */}
      <div className='w-full max-w-2xl grid grid-cols-1 sm:text-center gap-4 pb-16 sm:grid-cols-3'>
        <Link href='/'>
          <a className='text-gray-500 hover:text-gray-600 transition'>Home</a>
        </Link>
        <Link href='/about'>
          <a className='text-gray-500 hover:text-gray-600 transition'>About</a>
        </Link>
        <Link href='/blog'>
          <a className='text-gray-500 hover:text-gray-600 transition'>Blog</a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
