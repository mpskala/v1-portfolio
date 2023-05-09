import useSWR from 'swr'

import fetcher from '/lib/fetcher'
import MetricCard from '/components/metrics/Card'

const AllTimeStravaCards = ({ units }) => {
  const { data } = useSWR('/api/all-time-run', fetcher)

  const runs = data?.count
  const distance = data?.distance
    ? units === 'km'
      ? kmFormatter(data?.distance)
      : mileFormatter(data?.distance)
    : 0
  const duration = data?.elapsed_time ? secondsToHm(data?.elapsed_time) : 0

  return (
    <div className='mt-8 flex flex-col'>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-3 w-full'>
        <MetricCard header='Total Runs' metric={runs} />
        <MetricCard header='Total Distance' metric={distance} />
        <MetricCard header='Total Duration' metric={duration} />
      </div>
      <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mt-4 mb-2' />
      <span className='w-full text-sm text-gray-500 italic text-center'>
        All-Time Strava Running Data
      </span>
    </div>
  )
}

const kmFormatter = (num) => {
  return (Math.abs(num) / 1000).toFixed(1) + 'km'
}

const mileFormatter = (num) => {
  return (num * 0.000621371192).toFixed(2) + 'mi'
}

const secondsToHm = (n) => {
  const num = Number(n)
  const h = Math.floor(num / 3600)
  const m = Math.floor((num % 3600) / 60)
  const s = Math.floor((num % 3600) % 60)

  const hDisplay = h < 10 ? `0${h}` : h
  const mDisplay = m < 10 ? `0${m}` : m
  const sDisplay = s < 10 ? `0${s}` : s

  return `${hDisplay}:${mDisplay}:${sDisplay}`
}

export default AllTimeStravaCards
