import {Sport} from "@/Apps/TypePredicates/sports";

export type climbing = {
    readonly __type: 'climbing'
    style: 'boulder' | 'lead climb'
    grade: '5b' | '5c' | '6a' | '6b' | '6c' | '7a' | '7b' | '7c' | '8a' | '8b' | '8c' | '9a' | '9b' | '9c'
}

export const isClimbing = (activity: Sport): activity is climbing => activity.__type === 'climbing'

export const makeClimbing = (style: climbing['style'], grade: climbing['grade']): climbing => ({
    __type: 'climbing',
    style,
    grade
})
