#!/usr/bin/env node
import inquirer from "inquirer"

const answers: {
          sentence: string
} = await inquirer.prompt([{
          name:"sentence",
          type:"input",
          message:"Enter your Favt sentence"
}])

const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`your total sentence word is ${words.length}`);
