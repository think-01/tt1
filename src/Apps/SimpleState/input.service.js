export const states = {
    empty: 'empty',
    validating: 'validating',
    fine: 'fine',
    errors: 'errors',
    disabled: 'disabled'
}

export const transistions = {
    [states.empty]: {
        on: {
            UPDATE: states.validating,
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
            UPDATE: states.validating,
            TOGGLE: states.disabled
        }
    },
    [states.errors]: {
        on: {
            UPDATE: states.validating
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
    send(action) {
        this.currentState = transistions[this.currentState].on[action] || this.currentState
    }
}