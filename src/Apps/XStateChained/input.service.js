import {assign, createMachine} from 'xstate';
import { isEmail, minLength } from "@/components/utils";

const ValidateEmail = (context, event) => new Promise((resolve, reject) => {
    isEmail(event.data).then(r => r ? resolve(event.data) : reject())
});

const ValidateLength = (context, event) => new Promise((resolve, reject) => {
    minLength(event.data).then(r => r ? resolve(event.data) : reject())
});

export const states = {
    empty: 'empty',
    validating: 'validating',
    check: 'check',
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
        invoke: {
            src: ValidateLength,
            onDone: states.check,
            onError: states.errors
        },
        entry: () => console.log('validating length')
    },
    [states.check]: {
        invoke: {
            src: ValidateEmail,
            onDone: states.fine,
            onError: states.errors
        },
        entry: () => console.log('validating email')
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

export default createMachine({
    predictableActionArguments: true,
    id: 'input',
    initial: 'empty',
    context: {},
    states: transistions
});


