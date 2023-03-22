import polyline from '@mapbox/polyline'
import { Polyline } from 'leaflet'

export const decodePolyline = (encodedString) => {
	if (!encodedString) return []
	const decoded = polyline.decode(encodedString)
	return decoded
}

export const getPointArrayBounds = (points) => {
	const poly = new Polyline(points)
	return poly.getBounds()
}

export const getEncodedPolylineBounds = (encodedString) => {
	const points = decodePolyline(encodedString)
	return getPointArrayBounds(points)
}

export const getEncodedPolylineCenter = (encodedString) => {
	return encodedString
		? getEncodedPolylineBounds(encodedString).getCenter()
		: undefined
}
