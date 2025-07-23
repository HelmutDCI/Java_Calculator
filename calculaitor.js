<<<<<<< HEAD
//CALCULATOR program
const display = document.getElementById("display");

function appendtoDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
=======
//CALCULATOR program
const display = document.getElementById("display");

function appendtoDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
>>>>>>> 352c732a08afb54fa8fd5bf4157405e9c7b75bfc
}