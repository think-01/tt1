import { sport } from "./types";

export const getAchievement = (activity : any) => {
    if (activity.reps) return `I ${activity.exercise} ${activity.weight} kg by ${activity.reps} reps`
    if (activity.style) return `I ${activity.style} ${activity.grade}`
    if (activity.distance) return `I run ${activity.distance} km in ${activity.time} minutes`
}

/*
export const getAchievement = (activity : sport) => {
    if ("reps" in activity) return `I ${activity.exercise} ${activity.weight} kg by ${activity.reps} reps`
    if ("distance" in activity) return `I run ${activity.distance} km in ${activity.time} minutes`
    if ("style" in activity) return `I ${activity.style} ${activity.grade}`
}
*/
