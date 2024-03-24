#!/usr/bin/env node
import inquirer from 'inquirer';
const random = Math.floor(Math.random()*6 +1)
const answer = await inquirer.prompt([{
     name: "game",
     type: "number",
     message:"Guess the number between 1-6:"
}
])
if(answer.game===random){
    console.log("congratulation you guess the right number")
}
else{
    console.log("you guess is wrong try again")
}
