const Strava = async (req, res) => {
  const headers = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  }

  const body = JSON.stringify({
    client_id: process.env.STRAVA_CLIENT_ID,
    client_secret: process.env.STRAVA_SECRET,
    refresh_token: process.env.STRAVA_REFRESH_TOKEN,
    grant_type: 'refresh_token',
  })

  const reauthoriseResponse = await fetch(
    'https://www.strava.com/oauth/token',
    {
      method: 'post',
      headers: headers,
      body: body,
    }
  )

  const reAuthJson = await reauthoriseResponse.json()

  const response = await (
    await fetch(
      'https://www.strava.com/api/v3/athletes/82192015/stats?access_token=' +
        reAuthJson.access_token
    )
  ).json()

  const allRun = response.all_run_totals

  return res.status(200).json({ allRun })
}

export default Strava
