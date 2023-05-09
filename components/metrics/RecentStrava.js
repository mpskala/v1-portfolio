import useSWR from 'swr'
import dynamic from 'next/dynamic'

import fetcher from '/lib/fetcher'
import MetricCard from './Card'

const Map = dynamic(() => import('/components/Map'), {
  ssr: false,
})

const formatDate = (date) => {
  const today = new Date()
  const yesterday = new Date()
  const runDate = new Date(date)

  yesterday.setDate(today.getDate() - 1)

  if (runDate.toDateString() === today.toDateString()) {
    return 'Today'
  } else if (runDate.toDateString() === yesterday.toDateString()) {
    return 'Yesterday'
  }

  return runDate.toLocaleString('en-gb', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

const RecentStrava = ({ units }) => {
  const { data } = useSWR('/api/most-recent-run', fetcher)

  const distance = data?.distance
    ? units === 'km'
      ? kmFormatter(data?.distance)
      : mileFormatter(data?.distance)
    : 0
  const date = data ? new Date(data.elapsed_time * 1000).toISOString() : ''
  const duration =
    data?.elapsed_time < 3600 ? date.substring(14, 19) : date.substring(11, 19)
  const pace = data?.average_speed
    ? units === 'km'
      ? kpsFormatter(data?.average_speed)
      : mpsFormatter(data?.average_speed)
    : 0

  return (
    <div className='mt-8 flex flex-col'>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-3 w-full'>
        <MetricCard header='Distance' metric={distance} />
        <MetricCard header='Duration' metric={duration} />
        <MetricCard header='Pace' metric={pace} />
        <div className='sm:col-span-3 w-full h-60 md:h-96 z-0'>
          <Map data={data} />
        </div>
      </div>
      <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mt-4 mb-2' />
      <span className='w-full text-sm text-gray-500 italic text-center'>
        Most Recent Run {date ? `(${formatDate(data?.start_date)})` : ''}
      </span>
    </div>
  )
}

const kmFormatter = (num) => {
  return (Math.abs(num) / 1000).toFixed(2) + 'km'
}

const mileFormatter = (num) => {
  return (num * 0.000621371192).toFixed(2) + 'mi'
}

const kpsFormatter = (num) => {
  const kpsDecimal = (16.666666667 / num).toFixed(2)
  const leftover = kpsDecimal % 1
  const minutes = kpsDecimal - leftover
  const seconds = Math.round(leftover * 60)

  const paceKM =
    seconds < 10 ? `${minutes}:0${seconds}/km` : `${minutes}:${seconds}/km`

  return paceKM
}

const mpsFormatter = (num) => {
  const mpsDecimal = (26.8224 / num).toFixed(2)
  const leftover = mpsDecimal % 1
  const minutes = mpsDecimal - leftover
  const seconds = Math.round(leftover * 60)

  const paceM =
    seconds < 10 ? `${minutes}:0${seconds}/mi` : `${minutes}:${seconds}/mi`

  return paceM
}

export default RecentStrava
