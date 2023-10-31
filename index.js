#! /usr/bin/env node
import inquirer from "inquirer";
import showBanner from "node-banner";
import gradient from "gradient-string";
import { sum, subtract, multiply, divide } from "./function.js";
let answers = [
    { name: "num1",
        type: "number",
        message: (gradient.rainbow("enter first number")),
        validate: (input) => {
            if (isNaN(input)) {
                return "pleaseenter number";
            }
            return true;
        }
    },
    { name: "num2",
        type: "number",
        message: (gradient.rainbow("enter second number")),
    },
    { name: "operation",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "division"],
        message: (gradient.rainbow("enter your operation:")), }
];
let answer = [
    {
        name: "again",
        type: "confirm",
        message: "do  you want to calculate again"
    }
];
(async () => {
    await showBanner('Calculator', ' This calculator can perform addition,subtraction, multiplication and division', "red", "blue");
})();
setTimeout(() => { calculator(); }, 1000);
async function calculator() {
    let condition = true;
    while (condition) {
        let { num1, num2, operation } = await inquirer.prompt(answers);
        if (operation === "addition") {
            console.log("the sum of two numbers is :", sum(num1, num2));
        }
        else if (operation === "subtraction") {
            console.log("the difference of two nums is :", subtract(num1, num2));
        }
        else if (operation === "multiplication") {
            console.log("the cross of two nums is :", multiply(num1, num2));
        }
        else if (operation === "division") {
            console.log("the division of two nums is :", divide(num1, num2));
        }
        let { again } = await inquirer.prompt(answer);
        condition = again;
    }
}
