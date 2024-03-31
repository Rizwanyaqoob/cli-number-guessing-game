#! /usr/bin/env node
import inquirer from "inquirer";
const random = Math.floor(Math.random() *10+ 1)

const answer = await inquirer.prompt(
    {
name : "userGuessNumber",
type :"number",
message:"Please guess a number b/w 1-10:",

    }
    )
    if(answer.userGuessNumber ===random ){
        console.log("Coongratulation ! You guess Right Number")
    }else{
        console.log("Ohh! sorry , you Guess Wrong Number.")
    }
    console.log(random)