// import { createRef, useEffect, useRef } from 'react'
import Script from 'next/script'
import { MapContainer, TileLayer, Polyline } from 'react-leaflet'
// import { useTheme } from 'next-themes'

import MapSkeleton from './MapSkeleton'
import { decodePolyline, getEncodedPolylineCenter } from '/lib/utils'

const Map = ({ data }) => {
  // const { theme } = useTheme()
  // const polyLineRef = useRef(null)

  if (data === undefined) return ''
  const map = data.map
  const encodedRoute = map.polyline ?? map.summary_polyline
  const center = getEncodedPolylineCenter(encodedRoute)
  const path = decodePolyline(encodedRoute)

  // const mapUrl = `https://tiles.stadiamaps.com/tiles/alidade_smooth${
  // 	theme === 'dark' ? '_dark' : ''
  // }/{z}/{x}/{y}{r}.png`
  // const pathColour = theme === 'dark' ? '#1D9FCF' : '#EB2828'

  // console.log(polyLineRef.current)

  return (
    <div className='h-60 md:h-96 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden'>
      <Script
        src='https://unpkg.com/leaflet@1.9.3/dist/leaflet.js'
        integrity='sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM='
        crossOrigin=''
      />
      <MapContainer center={center} placeholder={<MapSkeleton />} zoom={14}>
        <TileLayer url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png' />
        {/* <Polyline ref={polyLineRef} positions={path} /> */}
        <Polyline positions={path} />
      </MapContainer>
    </div>
  )
}

export default Map
