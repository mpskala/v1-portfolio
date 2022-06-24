import useSWR from 'swr'
import fetcher from '/lib/fetcher'

const kmFormatter = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'km'
    : Math.sign(num) * Math.abs(num)
}

const mpsFormatter = (num) => {
  return (Math.abs(num) * 3.6).toFixed(2) + '/km'
}

const AllRun = () => {
  const { data, err } = useSWR('/api/most-recent-run', fetcher)

  if (err) return 'an error has occured'
  if (!data) return ''

  return (
    <div className='flex flex-col'>
      <div className='p-2 flex flex-row gap-2 place-content-evenly text-center'>
        <div className='total-runs'>
          <span className='text-xl md:text-3xl'>
            {kmFormatter(data.distance)}
          </span>{' '}
          <span className='text-sm block md:inline md:text-base text-gray-500 italic'>
            Distance
          </span>
        </div>
        <div className='total-distance'>
          <span className='text-xl md:text-3xl'>
            {data.moving_time < 3600
              ? new Date(data.moving_time * 1000)
                  .toISOString()
                  .substring(14, 19)
              : new Date(data.moving_time * 1000)
                  .toISOString()
                  .substring(11, 16)}
          </span>{' '}
          <span className='text-sm block md:inline md:text-base text-gray-500 italic'>
            Moving Time
          </span>
        </div>
        <div className='total-time'>
          <span className='text-xl md:text-3xl'>
            {mpsFormatter(data.average_speed)}
          </span>{' '}
          <span className='text-sm block md:inline md:text-base text-gray-500 italic'>
            Pace
          </span>
        </div>
      </div>
    </div>
  )
}

export default AllRun
