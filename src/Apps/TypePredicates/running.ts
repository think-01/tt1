import {Sport} from "@/Apps/TypePredicates/sports";

export type running = {
    readonly __type: 'running'
    distance: number
    time: number
}

export const isRunning = (activity: Sport): activity is running => activity.__type === 'running'

export const makeRunning = (distance: running['distance'], time: running['time']): running => ({
    __type: 'running',
    distance,
    time
})
