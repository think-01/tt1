export type running = {
    distance: number
    time: number
}

export type cycling = {
    distance: number
    time: number
    style: "road" | "mountain"
}

export type climbing = {
    style: "boulder" | "lead climb"
    grade: "5a" | "5b" | "5c" | "6a" | "6b" | "6c" | "7a" | "7b" | "7c" | "8a" | "8b" | "8c" | "9a" | "9b" | "9c"
}

export type Sport = running | cycling | climbing

const isCycling = (activity : Sport): activity is cycling => "distance" in activity && activity.distance / activity.time > 1

export const getAchievement = (activity : Sport) => {
    if (isCycling(activity)) return `I ${activity.style}-bike ${activity.distance} km in ${activity.time} hours`
    if ("style" in activity) return `I ${activity.style} ${activity.grade}`
    return `I run ${activity.distance} km in ${activity.time} minutes`
}
