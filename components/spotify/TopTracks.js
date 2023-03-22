import useSWR from 'swr'

import fetcher from '/lib/fetcher'
import Track from '/components/spotify/Track'

const Tracks = () => {
	const { data } = useSWR('/api/top-tracks', fetcher)

	if (!data) {
		return null
	}

	return (
		<>
			{data.tracks.map((track, index) => (
				<Track ranking={index + 1} key={track.songUrl} {...track} />
			))}
		</>
	)
}

export default Tracks
