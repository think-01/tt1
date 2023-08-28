import {isEmail, noop} from "@/components/utils";

export const states = {
    empty: 'empty',
    validating: 'validating',
    fine: 'fine',
    errors: 'errors',
    disabled: 'disabled'
}

const UPDATE = {
    target: states.validating,
    actions(context) {
        isEmail(context).then(r => this.send(r ? 'OK' : 'ERROR'))
    }
}

export const transistions = {
    [states.empty]: {
        on: {
            UPDATE,
            TOGGLE: states.disabled
        }
    },
    [states.validating]: {
        on: {
            OK: states.fine,
            ERROR: states.errors
        }
    },
    [states.fine]: {
        on: {
            UPDATE,
            TOGGLE: states.disabled
        }
    },
    [states.errors]: {
        on: {
            UPDATE
        }
    },
    [states.disabled]: {
        on: {
            TOGGLE: states.empty
        }
    }
}

export default {
    currentState: states.empty,
    send(action, context) {
        const newState = transistions[this.currentState].on[action] || null
        if(newState)
        {
            this.currentState = newState.target || newState
            const callback = newState.actions || noop
            callback.bind(this)(context)
        }
    }
}