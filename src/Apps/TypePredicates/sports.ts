import {isLifting, lifting} from './lifting'
import {isRunning, running} from './running'
import {climbing} from './climbing'

export type Sport = climbing | running | lifting

export function getMyRecord(mySport: climbing | running | lifting) : string {
    if (isLifting(mySport)) {
        return `I ${mySport.exercise} ${mySport.weight} kg by ${mySport.reps} reps`
    }

    if (isRunning(mySport)) {
        return `I run ${mySport.distance} km in ${mySport.time} minutes`
    }

    return `I ${mySport.style} ${mySport.grade}`
}
