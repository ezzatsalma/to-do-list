#! /usr/bin/env node
import inquirer from "inquirer";
let balance=100000;
let pincode=46421;
let pinnumber= await inquirer.prompt([{
    name:"atmpin",
    type:"number",
    message:"enter your pin",

}])
if(pinnumber.atmpin===pincode)
{
    console.log("correct pin")
    let pinanswer= await inquirer.prompt([{
        name :"operation",
        message :"select one",
        type :"list",
        choices:["withdraw","check balance"],

    }]);
    console.log(pinanswer)
    if(pinanswer.operation==="withdraw"){

        let amountans= await inquirer.prompt([{
            name:"amount",
            
            message:"enter amount",
            type:"list",
            choices:["1000","5000","8000","10000"]

          }])
          console.log(`remaining amount:${balance-amountans.amount}`)
        }
        else{
            console.log(`${balance}`)
        }
}
else{
    console.log("incorrect pin")
}





