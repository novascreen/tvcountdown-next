import React from 'react'

interface Props {
  a?: string
}

const Schedule = (props: Props) => {
  return <div>{props.a}</div>
}

export default Schedule
