console.log("OK");

const input_a = document.getElementById("input_a");
const input_b = document.getElementById("input_b");
const results = document.getElementById("result");
const name1= document.getElementById("name");

let a = 0;
let b = 0;

let name = window.prompt("please enter your name");

if(name != NaN){
    const person = {name: name };
    name1.innerHTML = person.name;
}


function calculate(input){
    a = input_a.valueAsNumber;
    b = input_b.valueAsNumber; 

    if (input.id == "add_btn"){
        results.innerHTML = a + b;
    }else if (input.id == "substract_btn"){
        results.innerHTML = a - b;
    }else if (input.id == "multiply_btn"){
        results.innerHTML = a * b;
    }else if (input.id == "divide_btn"){
        if(b != 0){
            results.innerHTML = a / b;
        }else{
            results.innerHTML="b is equal to 0!";
        }
    }
}

let arr1 = ["john", "Jason", "kevin"];
array.unshift("jad");
let arr2 = ["manel", "nahla", "sabine", "mirna"];
let array = arr1.concat(arr2);

let arr4 = array.slice(0, 3);
arr4.includes("sabine");

let num = array.reduce(reducer, 9);
results.innerHTML = array.reduce(reducer, 9);

function reducer(total, value){
    return total + value;
}
//array.forEach(traverse);
function traverse(value, index, array){
    return console.log(value);
}

array.indexOf("john");
array.length;
array.pop();
array.shift();
array.push();
array.reverse();

function print(input){
    if(input.id == "printh"){
        array.forEach(traverse);
    }
}