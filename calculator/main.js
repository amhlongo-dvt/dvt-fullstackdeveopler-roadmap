
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
let reset = true

function appendValue(value) {
    if (reset){
        answer.textContent = "0"
        reset = false
    }

    if (value == '.'){
        if (numbers.includes('.')) {
            window.alert("Cannot add multiple decimal points");
            return;
        }
        if (numbers.length === 0) {
            numbers.push('0');
        }
    }

    // If an operation is entered
    if (operations.includes(value)) {
        if (values.length === 0 && numbers.length === 0){
            window.alert("Cannot start with an operator")
            return
        }

        if(operations.includes(values.at(-1))){
            values[values.length-1] = value
            calc.textContent = values.join("")+numbers.join("") ;
            return;
        }

        if(numbers.length>0){
            values.push(numbers.join(""));
            numbers = []
        }
        values.push(value);
        calc.textContent = values.join("") 
        return
    }
    
    
    numbers.push(value)
    calc.textContent = values.join("") + numbers.join("")   
   
 
}

function negate(){
    if(reset){
        window.alert("please enter a number first")
        return
    }
    let temp = numbers.join("");
    numbers = []
    numbers.push(parseFloat(temp)*-1)
    calc.textContent = values.join("") + numbers.join("") 
}

function deleteValue(){
    if(reset){
        window.alert("please enter a number first")
        return
    }
    if(operations.includes(values.at(-1))){
        values.pop()
        if (values.length === 0) {
            calc.innerHTML = "<br>";
        }else{
            calc.textContent = values.join("")
        }
        return
    }else {
        numbers.pop()
        console.log(numbers);
        console.log(values);
        if (numbers.length === 0 && values.length === 0) {
            calc.innerHTML = "<br>";
            return;
        }
        calc.textContent = values.join("") + numbers.join("") 
    }

    

}

function percentage(){
    if(reset){
        window.alert("please enter a number first")
        return
    }
    let temp = numbers.join("");
    numbers = []
    numbers.push(parseFloat(temp)/100)
    calc.textContent = values.join("") + numbers.join("") 
}

function clearValues() {
    values = []
    numbers = []
    calc.innerHTML = "<br>"
    answer.textContent = "0"
    reset = true
    console.log("cleared");
}

function calculate() {
    if (values.length === 0) {
        window.alert("Please enter a calculation");
        return;
    }
    let result = 0
    
    values.push(numbers.join(""))
    values.forEach((element,i) => {
        console.log(element)
        if(operations.includes(element)){
            const operator = element;
            const operand1 = parseFloat(values.at(i-1));
            const operand2 = parseFloat(values.at(i+1));
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