import React from 'react'

interface Props {
  a?: string
}

const EpisodeList = (props: Props) => {
  return <div>{props.a}</div>
}

export default EpisodeList
