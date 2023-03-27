import {sport, isCycling, isClimbing} from "./types";

export const getAchievement = (activity : sport) => {
    if (isCycling(activity)) return `I ${activity.style}-bike ${activity.distance} km in ${activity.time} hours`
    if (isClimbing(activity)) return `I ${activity.style} ${activity.grade}`
    return `I run ${activity.distance} km in ${activity.time} minutes`
}
