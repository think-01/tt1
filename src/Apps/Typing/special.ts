let undefinedVar: undefined = undefined
let nullVar: null = null

// NEVER
type VariantA = {
    a: string,
    //b?: never
}

type VariantB = {
    b: number,
}

declare function fn(arg: VariantA | VariantB): void
fn({a: 'foo', b: 123 })

// ANY
function upperCase(arg: any): string {
    return arg.toUpperCase()
}

// UNKNOWN
function upperCase(arg: unknown): string {
    //if (typeof arg === 'string')
        return arg.toUpperCase()

    //throw new Error('arg is not a string')
}

