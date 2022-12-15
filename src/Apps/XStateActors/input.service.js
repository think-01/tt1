import {assign, createMachine, send, spawn} from 'xstate';
import { isEmail, minLength } from "@/components/utils";
import validationActorFactory from './validator.actor'
import counterActorFactory from './counter.actor'

const ValidateEmail = (context, event) => new Promise((resolve, reject) => {
    console.log('ValidateEmail', event.data)
    isEmail(event.data).then(r => r ? resolve(event.data) : reject())
});

const ValidateLength = (context, event) => new Promise((resolve, reject) => {
    console.log('ValidateLength', event.data)
    minLength(event.data).then(r => r ? resolve(event.data) : reject())
});

export const states = {
    empty: 'empty',
    validating: 'validating',
    fine: 'fine',
    errors: 'errors',
    disabled: 'disabled'
}

const lengthActor = validationActorFactory(ValidateLength).withContext({name: 'length'})
const emailActor = validationActorFactory(ValidateEmail).withContext({name: 'email'})

export const transistions = {
    [states.empty]: {
        on: {
            UPDATE: states.validating,
            TOGGLE: states.disabled
        },
        entry: assign({
            actors: () => [
                spawn(lengthActor, 'length'),
                spawn(emailActor, 'email'),
                spawn(counterActorFactory(2), 'counter')
            ]
        })
    },
    [states.validating]: {
        on: {
            FINE: {
                actions: send('NEXT', {to: 'counter'}),
            },
            FAILED: states.errors,
            DONE: states.fine
        },
        entry: [
            send('RESET', {to: 'counter'}),
            send((c,e) => e, {to: 'length'}),
            send((c,e) => e, {to: 'email'})
        ]
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
    context: {
        validators: null,
    },
    states: transistions
});


