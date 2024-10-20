const PI = 3.142

function add(a, b) {
    return a + b
}

function division(a, b) {
    if (b === 0) {
        return "Can't divide by zero"
    } else {
        return a / b
    }
}

// export default division
export default {PI, add, division}