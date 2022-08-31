import { useState } from 'react'

import Container from '/components/Container'
import TopTracks from '/components/spotify/TopTracks'
import AllTimeStravaCards from '/components/metrics/AllTimeStrava'
import RecentStrava from '/components/metrics/RecentStrava'

const Dashboard = () => {
  const [units, setUnits] = useState('km')

  return (
    <Container
      title='Matthew Skala - Dashboard.'
      description='My personal dashboard.'
    >
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          Dashboard
        </h1>

        <div className='w-full my-8'>
          <h2 className='font-bold text-xl md:text-3xl tracking-tight mb-4 text-black dark:text-white'>
            <a
              className='flex items-center'
              href='https://www.strava.com/athletes/82192015'
              target='_blank'
              rel='noreferrer'
            >
              Strava Data
              <svg
                className='h-4 w-4 ml-1'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                />
              </svg>
            </a>
          </h2>
          <p className='text-gray-600 dark:text-gray-400 mb-4'>
            Curious about my running? Here&apos;s my most recent run and
            all-time totals updated every run.
          </p>
          <button
            aria-label='Toggle KM or Miles'
            type='button'
            className='betterhover:hover:text-highlight transition-colors duration-300'
            onClick={() => setUnits(units === 'km' ? 'miles' : 'km')}
          >
            {units === 'km' ? 'Convert to miles' : 'Convert to kilometers'}
          </button>
          <RecentStrava units={units} />
          <AllTimeStravaCards units={units} />
        </div>

        <h2 className='font-bold text-xl md:text-3xl tracking-tight mb-4 text-black dark:text-white'>
          Top Tracks
        </h2>
        <p className='text-gray-600 dark:text-gray-400 mb-4'>
          Curious what I&apos;m currently jamming to? Here&apos;s my top tracks
          from Spotify over the last 30 days.
        </p>
        <TopTracks />
      </div>
    </Container>
  )
}

export default Dashboard
