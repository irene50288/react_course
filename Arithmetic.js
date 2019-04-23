export default class Arithmetic {

    static add (a = 0, b = 0) { return a + b }

    static subtract (a = 0, b = 0) { return a - b }

    static multiply (a = 1, b = 1) { return a * b }

    static divide (a = 1, b = 1) { return a / b }

    static intDivide (a = 1, b = 1) { return Math.floor(a / b) }

    static remainder (a = 1, b = 1) { return a % b }
}
