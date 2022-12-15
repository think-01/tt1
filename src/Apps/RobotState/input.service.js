import {createMachine, invoke, reduce, state, transition} from 'robot3';
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
    [states.empty]: state(
        transition('UPDATE', states.validating),
        transition('TOGGLE', states.disabled)
    ),
    [states.validating]: invoke(
        ValidateEmail,
        transition('done', states.fine),
        transition('error', states.errors)
    ),
    [states.fine]: state(
        transition('UPDATE', states.validating),
        transition('TOGGLE', states.disabled)
    ),
    [states.errors]: state(
        transition('UPDATE', states.validating),
    ),
    [states.disabled]: state(
        transition('TOGGLE', states.empty)
    )
}

export default createMachine(transistions);


