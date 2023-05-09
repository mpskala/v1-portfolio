import { getMostRecentRun } from '/lib/strava'

const Strava = async (req, res) => {
  return res.status(200).json(await getMostRecentRun())
}

export default Strava
