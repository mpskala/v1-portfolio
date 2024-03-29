import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import Footer from '/components/Footer'
import MobileMenu from '/components/MobileMenu'
import NavItem from '/components/NavItem'

export default function Container(props) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Matthew Skala – Developer.',
    description: `Full-Stack Developer.`,
    type: 'website',
    ...customMeta,
  }

  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://mpskala.com${router.asPath}`}
        />
        <link rel='canonical' href={`https://mpskala.com${router.asPath}`} />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Matt Skala' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta name='twitter:site' content='@mpskala' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
      </Head>
      <div className='sticky flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900 dark:bg-opacity-75 bg-opacity-75'>
        <nav className='flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto py-8  text-gray-900 dark:text-gray-100'>
          <a href='#skip' className='skip-nav'>
            Skip to content
          </a>
          <div className='ml-[-0.60rem] z-10'>
            <MobileMenu />
            <NavItem href='/' text='Home' />
            <NavItem href='/about' text='About' />
            <NavItem href='/projects' text='Projects' />
            <NavItem href='/blog' text='Blog' />
          </div>
          <div className='flex space-x-4 items-center z-10'>
            <NavItem href='/dashboard' text='Dashboard' />
            <button
              aria-label='Toggle Dark Mode'
              type='button'
              className='w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  betterhover:hover:ring-2 ring-gray-300  transition-all'
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
            >
              {mounted && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  className='w-5 h-5 text-gray-800 dark:text-gray-200'
                >
                  {resolvedTheme === 'dark' ? (
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                    />
                  ) : (
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                    />
                  )}
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>
      <main
        id='skip'
        className='flex flex-col justify-center px-8 pt-8 bg-gray-50 dark:bg-gray-900'
      >
        {children}
        <Footer />
      </main>
    </div>
  )
}
