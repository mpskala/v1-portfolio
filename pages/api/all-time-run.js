import { getAllTimeRunningData } from '/lib/strava'

const Strava = async (req, res) => {
	return res.status(200).json(await getAllTimeRunningData())
}

export default Strava
