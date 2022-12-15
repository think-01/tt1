import {createMachine, sendParent, sendUpdate} from 'xstate';

export const states = {
    idle: 'idle',
    validating: 'validating',
    fine: 'fine',
    failed: 'failed'
}

export const transistionsFactory = ValidationStrategy => ({
    [states.idle]: {
        on: {
            UPDATE: states.validating
        }
    },
    [states.validating]: {
        invoke: {
            src: ValidationStrategy,
            onDone: states.fine,
            onError: states.failed
        }
    },
    [states.fine]: {
        on: {
            UPDATE: states.validating
        },
        entry: sendParent('FINE')
    },
    [states.failed]: {
        on: {
            UPDATE: states.validating
        },
        entry: sendParent('FAILED')
    }
})

export default ValidationStrategy => createMachine({
    predictableActionArguments: true,
    id: 'validator',
    initial: 'idle',
    context: {},
    states: transistionsFactory(ValidationStrategy)
});