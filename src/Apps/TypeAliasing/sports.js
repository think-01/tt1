export const getAchievement = activity => {
    if (activity.reps) return `I ${activity.exercise} ${activity.weight} kg by ${activity.reps} reps`
    if (activity.style) return `I ${activity.style} ${activity.grade}`
    if (activity.distance) return `I run ${activity.distance} km in ${activity.time} minutes`
}