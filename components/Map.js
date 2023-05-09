import Script from 'next/script'
import { MapContainer, TileLayer, Polyline } from 'react-leaflet'

import MapSkeleton from './MapSkeleton'
import { decodePolyline, getEncodedPolylineCenter } from '/lib/utils'

const Map = ({ data }) => {
  if (data === undefined) return ''
  const map = data.map
  const encodedRoute = map.polyline ?? map.summary_polyline
  const center = getEncodedPolylineCenter(encodedRoute)
  const path = decodePolyline(encodedRoute)

  return (
    <div className='h-60 md:h-96 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden'>
      <Script
        src='https://unpkg.com/leaflet@1.9.3/dist/leaflet.js'
        integrity='sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM='
        crossOrigin=''
      />
      <MapContainer center={center} placeholder={<MapSkeleton />} zoom={14}>
        <TileLayer url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png' />
        <Polyline positions={path} />
      </MapContainer>
    </div>
  )
}

export default Map
