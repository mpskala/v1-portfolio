import useSWR from 'swr'
import fetcher from '/lib/fetcher'

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

const AllRun = ({ units }) => {
  const { data, err } = useSWR('/api/all-time-run', fetcher)

  if (err) return 'an error has occured'
  if (!data) return ''

  return (
    <div className='flex flex-col'>
      <div className='p-2 flex flex-row gap-2 place-content-evenly text-center'>
        <div className='total-runs'>
          <span className='text-xl md:text-3xl'>{data.count}</span>{' '}
          <span className='text-sm block md:inline md:text-base text-gray-500 italic'>
            Runs
          </span>
        </div>
        <div className='total-distance'>
          <span className='text-xl md:text-3xl'>
            {units === 'km'
              ? kmFormatter(data.distance)
              : mileFormatter(data.distance)}
          </span>{' '}
          <span className='text-sm block md:inline md:text-base text-gray-500 italic'>
            Distance
          </span>
        </div>
        <div className='total-time'>
          <span className='text-xl md:text-3xl'>
            {secondsToHm(data.moving_time)}
          </span>{' '}
          <span className='text-sm block md:inline md:text-base text-gray-500 italic'>
            Moving Time
          </span>
        </div>
      </div>
    </div>
  )
}

export default AllRun
