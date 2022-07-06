import useSWR from 'swr'

import fetcher from '/lib/fetcher'
import MetricCard from '/components/metrics/Card'

const AllTimeStravaCards = ({ units }) => {
  const { data } = useSWR('/api/all-time-run', fetcher)

  if (!data) return ''

  const runs = data.count
  const distance =
    units === 'km' ? kmFormatter(data.distance) : mileFormatter(data.distance)
  const movingTime = secondsToHm(data.moving_time)

  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-3 my-2 w-full'>
      <MetricCard header='Total Runs' metric={runs} />
      <MetricCard header='Distance' metric={distance} />
      <MetricCard header='Moving Time' metric={movingTime} />
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
