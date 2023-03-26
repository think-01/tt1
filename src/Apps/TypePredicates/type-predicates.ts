type lifting = {
    __type: 'lifting'
    exercise: 'dead lift' | 'squat' | 'bench press' | 'over head press'
    weight: number
    reps: number
}

type running = {
    __type: 'running'
    distance: number
    time: number
}

type climbing = {
    __type: 'climbing'
    style: 'boulder' | 'lead climb'
    grade: '5b' | '5c' | '6a' | '6b' | '6c' | '7a' | '7b' | '7c' | '8a' | '8b' | '8c' | '9a' | '9b' | '9c'
}

export type sport = lifting | running | climbing

const isLifting = (sport: sport): sport is lifting => sport.__type === 'lifting'
const isRunning = (sport: sport): sport is running => sport.__type === 'running'
const isClimbing = (sport: sport): sport is climbing => sport.__type === 'climbing'

export default function(mySport: sport) : string {
    if (isLifting(mySport)) {
        return `I ${mySport.exercise} ${mySport.weight} kg by ${mySport.reps} reps`
    }
/*
    if (isRunning(mySport)) {
        return `I run ${mySport.distance} km in ${mySport.time} minutes`
    }
*/
    return `I ${mySport.style} ${mySport.grade}`
}
