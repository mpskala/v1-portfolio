const getNewRefreshToken = async () => {
	const headers = {
		Accept: 'application/json, text/plain, */*',
		'Content-Type': 'application/json',
	}

	const body = JSON.stringify({
		client_id: process.env.STRAVA_CLIENT_ID,
		client_secret: process.env.STRAVA_SECRET,
		code: '344f892f8608937efbf4ca40c5f516ce03c9f0d7',
		grant_type: 'authorization_code',
	})

	const reauthoriseResponse = await fetch(
		'https://www.strava.com/oauth/token',
		{
			method: 'post',
			headers: headers,
			body: body,
		}
	)

	const res = await reauthoriseResponse.json()
	return res
}

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
	const res = await reauthoriseResponse.json()

	return res
}

export const getAllTimeRunningData = async () => {
	const { access_token } = await getStravaAccessToken()

	return await fetch(
		'https://www.strava.com/api/v3/athletes/82192015/stats?access_token=' +
			access_token
	)
		.then((res) => res.json())
		.then((stats) => {
			return stats.all_run_totals
		})
		.catch((err) => console.error(err))
}

export const getMostRecentRun = async () => {
	const { access_token } = await getStravaAccessToken()

	return await fetch(
		'https://www.strava.com/api/v3/athlete/activities?access_token=' +
			access_token
	)
		.then((res) => res.json())
		.then((activities) => {
			return activities.find((activity) => {
				return activity.sport_type == 'Run' && activity.type == 'Run'
			})
		})
}
