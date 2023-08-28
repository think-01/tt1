import {createMachine, sendParent} from 'xstate';

const make = size => {
    let step
    const states = {}
    for(step = 0; step< size; step++) {
        states[`step-${step}`] = {
            on: {
                NEXT: `step-${step+1}`,
                RESET: `step-0`
            }
        }
    }

    states[`step-${step}`] = {
        on: {
            RESET: `step-0`
        },
        entry: sendParent('DONE')
    }
    return states
}

export default steps => createMachine({
    predictableActionArguments: true,
    id: 'counter',
    initial: 'step-0',
    context: {},
    states: make(steps)
});