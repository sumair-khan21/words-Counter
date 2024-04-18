import inquirer from "inquirer";
const answers = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter your Favt sentence"
    }]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`your total sentence word is ${words.length}`);
