export type lifting = {
    exercise: "bench press" | "squat" | "dead lift"
    weight: number
    reps: number
}

export type running = {
    distance: number
    time: number
}

export type climbing = {
    style: "boulder" | "lead climb"
    grade: "5a" | "5b" | "5c" | "6a" | "6b" | "6c" | "7a" | "7b" | "7c" | "8a" | "8b" | "8c" | "9a" | "9b" | "9c"
}

export type Sport = lifting | running | climbing

export const getAchievement = (activity : any) => {
    if (activity.reps) return `I ${activity.exercise} ${activity.weight} kg by ${activity.reps} reps`
    if (activity.style) return `I ${activity.style} ${activity.grade}`
    if (activity.distance) return `I run ${activity.distance} km in ${activity.time} minutes`
}

/*
export const getAchievement = (activity : Sport) => {
    if ("reps" in activity) return `I ${activity.exercise} ${activity.weight} kg by ${activity.reps} reps`
    if ("distance" in activity) return `I run ${activity.distance} km in ${activity.time} minutes`
    if ("style" in activity) return `I ${activity.style} ${activity.grade}`
}
*/
