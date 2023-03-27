class Sample {
    readonly numeric = 123

    static readonly text = "abc"
    static method() {
        return "def"
    }
}

let valueFromStaticProperty = Sample.text
let valueFromStaticMethod = Sample.method()

//TS2339: Property 'numeric' does not exist on type 'typeof Sample'.
let valueFromPublicProperty = Sample.numeric

const sample = new Sample()

//TS2576: Property 'text' does not exist on type 'Sample'. Did you mean to access the static member 'Sample.text' instead?
let instanceValueFromStaticProperty = sample.text

//TS2576: Property 'method' does not exist on type 'Sample'. Did you mean to access the static member 'Sample.method' instead?
let instanceValueFromStaticMethod = sample.method()

let instanceValueFromPublicProperty = sample.numeric

//Attempt to assign to const or readonly variable
sample.numeric = 123
