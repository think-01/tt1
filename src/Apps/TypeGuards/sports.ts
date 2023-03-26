type lifting = {
    exercise: 'dead lift' | 'squat' | 'bench press' | 'over head press'
    weight: number
    reps: number
}

type running = {
    distance: number
    time: number
}

type climbing = {
    style: 'boulder' | 'lead climb'
    grade: '5b' | '5c' | '6a' | '6b' | '6c' | '7a' | '7b' | '7c' | '8a' | '8b' | '8c' | '9a' | '9b' | '9c'
}

export type Sport = lifting | running | climbing

export function getMyRecord(mySport: climbing | running | lifting) : string {
    if ('reps' in mySport) {
        return `I ${mySport.exercise} ${mySport.weight} kg by ${mySport.reps} reps`
    }

    if ('distance' in mySport) {
        return `I run ${mySport.distance} km in ${mySport.time} minutes`
    }


    return `I ${mySport.style} ${mySport.grade}`
}
