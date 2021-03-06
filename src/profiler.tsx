/* eslint-disable no-console */
import React from 'react'

let queue: Array<{[key: string]: string | number}> = []

setInterval(sendProfileQueue, 5000)

function sendProfileQueue() {
  if (!queue.length) {
    return Promise.resolve({success: true})
  }
  const queueToSend = [...queue]
  queue = []
  return console.log(queueToSend)
}

// By wrapping the Profile like this, we can set the onRender to whatever
// we want and we get the additional benefit of being able to include
// additional data and filter phases
type ProfilerProps = {
  metadata?: string | any
  phases: string[]
  children: React.ReactNode
  id: string
}
function Profiler({metadata, phases, ...props}: ProfilerProps): JSX.Element {
  function reportProfile(
    id: string, // the "id" prop of the Profiler tree that has just committed
    phase: string, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration: number, // time spent rendering the committed update
    baseDuration: number, // estimated time to render the entire subtree without memoization
    startTime: number, // when React began rendering this update
    commitTime: number, // when React committed this update
    interactions: any, // the Set of interactions belonging to this update
  ): void {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!phases || phases.includes(phase)) {
      queue.push({
        metadata,
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions,
      })
    }
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <React.Profiler onRender={reportProfile} {...props} />
}

export default Profiler
