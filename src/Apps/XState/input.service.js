import { createMachine } from 'xstate';
import { isEmail } from "@/components/utils";

const ValidateEmail = (context, event) => new Promise((resolve, reject) => {
    isEmail(event.value).then(r => r ? resolve() : reject())
});

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
        invoke: {
            src: ValidateEmail,
            onDone: states.fine,
            onError: states.errors
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

export default createMachine({
    predictableActionArguments: true,
    id: 'input',
    initial: 'empty',
    context: {},
    states: transistions
});


