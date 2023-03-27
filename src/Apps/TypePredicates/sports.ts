import {sport, cycling} from "./types";

//const isCycling = (activity : sport) => "distance" in activity && activity.distance / activity.time > 1
const isCycling = (activity : sport): activity is cycling => "distance" in activity && activity.distance / activity.time > 1

export const getAchievement = (activity : sport) => {
    if (isCycling(activity)) return `I ${activity.style}-bike ${activity.distance} km in ${activity.time} hours`
    if ("style" in activity) return `I ${activity.style} ${activity.grade}`
    return `I run ${activity.distance} km in ${activity.time} minutes`
}
