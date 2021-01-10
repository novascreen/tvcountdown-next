import { SearchResponse, Show } from 'types'

const BASE_URL = 'https://api.tvmaze.com'
// const COUNTRYCODE = 'US'

const getJSON = (res: Response) => {
  if (!res.ok) throw new Error('Fail')
  return res.json()
}

const search = (query: string): Promise<Show[]> =>
  fetch(`${BASE_URL}/search/shows?q=${query}`)
    .then(getJSON)
    .then((results: SearchResponse) => results.map((result) => result.show))

export const tvmazeService = {
  search,
}
