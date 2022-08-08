import useSWR from 'swr'

import fetcher from '/lib/fetcher'
import MetricCard from '/components/metrics/Card'

const formatDate = (date) => {
  return new Date(date).toLocaleString('en-gb', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

const RecentStrava = ({ units }) => {
  const { data, err } = useSWR('/api/most-recent-run', fetcher)

  if (err) return 'an error has occured'
  if (!data) return ''

  const distance =
    units === 'km' ? kmFormatter(data.distance) : mileFormatter(data.distance)
  const movingTime =
    data.moving_time < 3600
      ? new Date(data.moving_time * 1000).toISOString().substring(14, 19)
      : new Date(data.moving_time * 1000).toISOString().substring(11, 16)
  const pace =
    units === 'km'
      ? kpsFormatter(data.average_speed)
      : mpsFormatter(data.average_speed)

  return (
    <div className='mt-4 flex flex-col'>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-3 my-2 w-full'>
        <MetricCard header='Distance' metric={distance} />
        <MetricCard header='Moving Time' metric={movingTime} />
        <MetricCard header='Pace' metric={pace} />
      </div>
      <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mt-4 mb-2' />
      <span className='w-full text-sm text-gray-500 italic text-center'>
        Most Recent Run ({formatDate(data.start_date)})
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

const kpsFormatter = (num) => {
  const kpsDecimal = (16.666666667 / num).toFixed(2)
  const leftover = kpsDecimal % 1
  const minutes = kpsDecimal - leftover
  const seconds = Math.round(leftover * 60)

  const paceKM = `${minutes}:${seconds}/km`

  return paceKM
}

const mpsFormatter = (num) => {
  const mpsDecimal = (26.8224 / num).toFixed(2)
  const leftover = mpsDecimal % 1
  const minutes = mpsDecimal - leftover
  const seconds = Math.round(leftover * 60)

  const paceM = `${minutes}:${seconds}/mi`

  return paceM
}

export default RecentStrava
