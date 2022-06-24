import { useState } from 'react'

import Container from '/components/Container'
import TopTracks from '/components/spotify/TopTracks'
import AllRun from '/components/strava/AllRunning'
import RecentRun from '/components/strava/RecentRun'

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
        {/* <div className='mb-8'>
          <p className='text-gray-600 dark:text-gray-400'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis qui necessitatibus sunt soluta modi. Dolor perspiciatis
            suscipit culpa quos modi beatae voluptatem tempore, facilis
            similique quas facere, est officia? Odio.
          </p>
        </div> */}

        <div className='w-full my-8'>
          <h2 className='font-bold text-xl md:text-3xl tracking-tight mb-4 text-black dark:text-white'>
            Strava Data
          </h2>
          <p className='text-gray-600 dark:text-gray-400 mb-4'>
            Curious about my running? Here&apos;s my most recent run and
            all-time totals updated every run.
          </p>
          <button
            aria-label='Toggle KM or Miles'
            type='button'
            className='hover:text-highlight'
            onClick={() => setUnits(units === 'km' ? 'miles' : 'km')}
          >
            {units === 'km' ? 'Convert to miles' : 'Convert to kilometers'}
          </button>
          <div className='mt-4 flex flex-col'>
            <RecentRun units={units} />
            <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mt-4 mb-2' />
            <span className='w-full text-sm text-gray-500 italic text-center'>
              Most Recent Run
            </span>
          </div>
          <div className='mt-8 flex flex-col'>
            <AllRun units={units} />
            <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mt-4 mb-2' />
            <span className='w-full text-sm text-gray-500 italic text-center'>
              All-Time Strava Running Data
            </span>
          </div>
        </div>

        <h2 className='font-bold text-xl md:text-3xl tracking-tight mb-4 text-black dark:text-white'>
          Top Tracks
        </h2>
        <p className='text-gray-600 dark:text-gray-400 mb-4'>
          Curious what I&apos;m currently jamming to? Here&apos;s my top tracks
          on Spotify updated daily.
        </p>
        <TopTracks />
      </div>
    </Container>
  )
}

export default Dashboard
