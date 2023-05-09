const Track = (track) => {
  return (
    <div className='flex flex-row items-baseline border-b border-gray-200 dark:border-gray-800 max-w-3xl w-full mt-8'>
      <p className='text-sm font-bold text-gray-600 dark:text-gray-400'>
        {track.ranking}
      </p>
      <div className='flex flex-col pl-3'>
        <a
          className=''
          href={track.songUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='flex items-center font-medium text-gray-900 dark:text-gray-100 '>
            <p className='truncate max-w-xs sm:max-w-sm md:max-w-[35rem] md:break-words md:whitespace-normal'>
              {track.title}
            </p>
            <svg
              className='h-4 w-4 ml-1 inline-block align-middle'
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
          </span>
          <p
            className='text-gray-600 dark:text-gray-400 mb-4 truncate w-60 sm:w-96 md:w-full md:break-words md:whitespace-normal'
            color='gray.500'
          >
            {track.artist}
          </p>
        </a>
      </div>
    </div>
  )
}

export default Track
