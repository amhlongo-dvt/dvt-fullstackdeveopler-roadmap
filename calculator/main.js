
const calc = document.querySelector(".calculation")
const answer = document.querySelector(".answer")
const values = []
const operations = ['+', '-', '*', '/', "."]
let numbers = []
const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
  };

function appendValue(value) {
    currentValue = value
    // if (operations.includes(value) && operations.includes(values.at(-1))) {
    //     window.alert("Please press a number")
    //     return
    // }
    if(operations.includes(value)){
        // numbers.join("")
        console.log(numbers.join(""))

        // values.push(numbers)
    }else{
        numbers.push(value)
        calc.textContent = numbers.join("")   
        return
        // calc.textContent = values.join("") + numbers.join("")
        // return    
    }
    values.push(numbers.join(""));
    values.push(value);
    calc.textContent = values.join("")    
    console.log(values);
    numbers = []
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
}
