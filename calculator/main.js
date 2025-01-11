
const calc = document.querySelector(".calculation")
const answer = document.querySelector(".answer")
const operations = ['+', '-', '*', '/', "."]
const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
};
let values = []
let numbers = []
let reset = false
function appendValue(value) {
    if (reset){
        answer.textContent = "0"
        reset = false
    }
    currentValue = value
    if (operations.includes(value) && operations.includes(values.at(-1))) {
        window.alert("Please press a number")
        return
    }
    if(!operations.includes(value)){
        numbers.push(value)
        calc.textContent = values.join("") + numbers.join("")   
        return
    }
    values.push(numbers.join(""));
    values.push(value);
    calc.textContent = values.join("")    
    console.log(values);
    numbers = []
}

function clearValues() {
    values = []
    numbers = []
    calc.innerHTML = "<br>"
    answer.textContent = "0"
    console.log("cleared");
    
}

function calculate() {
    let result = 0
    values.push(numbers.join(""))
    values.forEach((element,i) => {
        console.log(element)
        if(operations.includes(element)){
            const operator = element;
            const operand1 = parseInt(values.at(i-1));
            const operand2 = parseInt(values.at(i+1));
            result += operators[operator](operand1, operand2);
        }
    })
    answer.textContent = result
    calc.textContent = values.join("") 
    // clearValues()
    values = []
    numbers = []
    reset = true
}
