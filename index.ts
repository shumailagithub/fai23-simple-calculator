#! /usr/bin/env node
                          //  simple Calculator


import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform opration",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiple", "Division"],
  },
]);




// Conditional Statment

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
  
}else if(answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
  
}else if(answer.operator === "Multiple") {
  console.log(answer.firstNumber * answer.secondNumber);
  
}else if(answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
  
}else{
  console.log("Enter a valid number");
  
}








