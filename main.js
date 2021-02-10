let num1 = document.getElementById("number1")
let num2 = document.getElementById("number2")
let result = document.getElementById("result")


function calculate() {
    if (num1.value == num2.value) {
        result.innerHTML = (Number(num1.value) + Number(num2.value)) * 5
    } else {
        result.innerHTML = Number(num1.value) + Number(num2.value)
    }
}