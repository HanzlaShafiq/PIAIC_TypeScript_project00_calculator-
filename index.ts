#! /usr/bin/env node
import  inquirer  from "inquirer";
import chalk from "chalk";

console.log(chalk.bgCyan("\nWellcom to my Calculator\n"));
async function askQuestion(){
    const answers = await inquirer
  .prompt([
   //Which operator User use.
    {
        type: "list",
        name:"operator",
        message:"Which operation you want to perform? \n",
        choices:["Addition","Subtraction","Multiplication","Division"]
    },
    {
        type:"number",
        name:"num1",
        message:"Enter value of Number 1:"
    },
    {
        type:"number",
        name:"num2",
        message:"Enter value of Number 2:"
    }
  ]);
  
   if(answers.operator == "Addition"){
    console.log(chalk.bgBlue(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`))
   }
   else if (answers.operator == "Subtraction"){
    console.log(chalk.bgBlue(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`))
   }
   else if (answers.operator == "Multiplication"){
    console.log(chalk.bgBlue(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`))
   }
   else if (answers.operator == "Division"){
    console.log(chalk.bgBlue(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`))
   }
  };

async function startAgain(){
    do{
        await askQuestion();
      var again= await inquirer
        .prompt({
            type: "input",
            name:"restart",
            message:"Do you want to continue? Press y for 'YES' or N for 'NOT':"
        })
    }while(again.restart == 'y' || again.restart == 'Y' )
    if (again.restart != "y" || again.restart!="Y") {
        console.log(chalk.bgCyan(`\nThanks to use my Calculator.\n`))
    }
}
startAgain()
