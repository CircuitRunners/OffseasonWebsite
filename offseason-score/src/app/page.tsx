import React from 'react'
import Calc from './calc'
import Ranking from './ranking'
import Scoreboard from './Scoreboard'
import {getMatchByNumber, getAllMatches} from './db'
function Page() {
    return (
    <div>
      <Calc />
    </div>
  )
}
export default Page
