import {Sport} from "@/Apps/TypePredicates/sports";

export type lifting = {
    readonly __type: 'lifting'
    exercise: 'dead lift' | 'squat' | 'bench press' | 'over head press'
    weight: number
    reps: number
}

export const isLifting = (activity: Sport): activity is lifting => activity.__type === 'lifting'

export const makeLifting = (exercise: lifting['exercise'], weight: lifting['weight'], reps: lifting['reps']): lifting => ({
    __type: 'lifting',
    exercise,
    weight,
    reps
})
