const values = []
const operations = ['+', '-', '*', '/']

function appendValue(value) {
    console.log();
    
    if (operations.includes(value) && operations.includes(values.at(-1))) {
        window.alert("Please press a number")
        return
    }
    
    values.push(value);
    
    console.log(values.join(""));
    
}