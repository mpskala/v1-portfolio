const getStravaAccessToken = async () => {
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

  return await reauthoriseResponse.json()
}

export const getAllTimeRunningData = async () => {
  const { access_token } = await getStravaAccessToken()

  const response = await (
    await fetch(
      'https://www.strava.com/api/v3/athletes/82192015/stats?access_token=' +
        access_token
    )
  ).json()

  return response.all_run_totals
}

export const getMostRecentRun = async () => {
  const response = await (
    await fetch('https://www.strava.com/api/v3/athlete/activities')
  ).json()

  return response
}
