export type Maybe<T> = T | null

type ShowShared = {
  id: number
  name: string
  summary: string
  premiered: Maybe<string>
  network: Maybe<{
    id: string
    name: string
  }>
  webChannel: Maybe<{
    id: string
    name: string
  }>
  image: Maybe<{
    medium: string
    original: string
  }>
}

export type Show = ShowShared

export type SearchResponse = Array<{
  score: number
  show: ShowShared
}>
