let inputText = document.querySelector("#display");
let elementsList = [];
let actualElement =0;
let acumulate;

function number(number){
    if(acumulate) {
        inputText.value = number;
        actualElement = number;
        acumulate = 0;
        return;
    } 

    inputText.value += number;
    actualElement = actualElement + number;
    console.log(elementsList);

}

function add(){
    inputText.value += "+";
    elementsList.push(parseInt(actualElement));
    actualElement = "";
    elementsList.push("+");
    console.log(elementsList);

}

function substract(){
    inputText.value += "-";
    elementsList.push(parseInt(actualElement));
    actualElement = "";
    elementsList.push("-");
    console.log(elementsList);

}

function multiply(){
    inputText.value += "*";
    elementsList.push(parseInt(actualElement));
    actualElement = "";
    elementsList.push("*");
    console.log(elementsList);

}

function divide(){
    inputText.value += "/";
    elementsList.push(parseInt(actualElement));
    actualElement = "";
    elementsList.push("/");
    console.log(elementsList);

}

function equal(){
    // TODO prioridades de los operadores (primero multiplicar y dividir, luego sumar y restar)
    if(elementsList.length === 0) return;

    elementsList.push(parseInt(actualElement));
    console.log(elementsList);
    actualElement = "";
    
    acumulate = elementsList[0];
    for(let i = 1; i < elementsList.length; i++){
        if(elementsList[i] === "+"){
            acumulate += elementsList[i+1];
        }
        if(elementsList[i] === "-"){
            acumulate -= elementsList[i+1];
        }
        if(elementsList[i] === "*"){
            acumulate *= elementsList[i+1];
        }
        if(elementsList[i] === "/"){
            acumulate /= elementsList[i+1];
        }
    }

    inputText.value = acumulate;
    elementsList = [];
    console.log(elementsList);

}

function clear(){
    console.log("clear");
    inputText.value = "";
    elementsList.length = 0;
    actualElement = "";
}


