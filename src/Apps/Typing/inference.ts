const literalType = 1;
let numberType = 1
let anyType
let undefinedNumberType: number
let undefinedNullableNumberType: number | null
let emptyObjectType = {}
let shapeType = {x: 1}
let undefinedShapeType: {
    numberProperty: number
    stringProperty: string
}
let emptyArrayType = []
let stringAndNumericArrayType = [1, "text"]
let undefinedNumberArray : number[]
let undefinedStringArray : string[]
let undefinedShapeArray : { x: number }[]

//TS2588: Cannot assign to 'literalType' because it is a constant.
literalType = null

//TS2322: Type 'null' is not assignable to type '***'.
numberType = null
undefinedNumberType = null
emptyObjectType = null
shapeType = null
undefinedShapeType = {numberProperty: null, stringProperty: 'text'}
undefinedShapeType = {numberProperty: 123, stringProperty: null}
emptyArrayType = null
undefinedNumberArray = null
undefinedStringArray = null
undefinedShapeArray = null

//TS2322: Type 'undefined' is not assignable to type '***'.
numberType = undefined
undefinedNumberType = undefined
undefinedNullableNumberType = undefined
emptyObjectType = undefined
shapeType = undefined
emptyArrayType = undefined
undefinedNumberArray = undefined
undefinedStringArray = undefined
undefinedShapeArray = undefined

//TS2741: Property '***' is missing but required in type '***'.
undefinedShapeType = {stringProperty: 'text'}
undefinedShapeType = {numberProperty: 123}
undefinedShapeType = {}
stringAndNumericArrayType = [{}]
stringAndNumericArrayType = [null]
undefinedNumberArray = ["text"]
undefinedStringArray = [123]
undefinedShapeArray = [{another: 'shape'}]

//TS2322: Type 'string' is not assignable to type 'number'.
numberType = "text"
undefinedNumberType = "text"
undefinedNullableNumberType = "text"
emptyObjectType = null
shapeType = "text"

//TS2322: Type '{ a: string; }' is not assignable to type '{ x: number; }'.
shapeType = {a: 'b'}

/** All the below pass TS compiler */

numberType = 11

anyType = 11
anyType = "text"
anyType = null
anyType = undefined

undefinedNumberType = 11
undefinedNullableNumberType = 11
undefinedNullableNumberType = null

shapeType = {x: 1}
shapeType = {x: 2}

emptyObjectType = {a: 'b'}
emptyObjectType = {a: 1}
emptyObjectType = {z: [], whatever: 'else'}
undefinedShapeType = {numberProperty: 123, stringProperty: "text"}

emptyArrayType = [1]
emptyArrayType = [1, 2]
emptyArrayType = [1, "text"]
emptyArrayType = [1, "text", null]

stringAndNumericArrayType = [1, "text"]
stringAndNumericArrayType = [1, "text", 123]
undefinedNumberArray = [1,2,3]
undefinedStringArray = ["text", "text2"]
undefinedShapeArray = [{x: 1}, {x: 2}]
