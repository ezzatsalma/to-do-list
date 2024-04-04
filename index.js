#! /usr/bin/env node
import inquirer from "inquirer";
let condition = true;
let todos = [];
while (condition) {
    let todolist = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add in your todos?",
        },
        {
            name: "addmore",
            type: "confirm",
            message: "do you want to add more?",
            default: "true",
        }
    ]);
    if (todolist.todo.trim() === "") {
        console.log("Invalid input. Todo cannot be blank.");
        break;
    }
    condition = todolist.addmore;
    todos.push(todolist.todo);
    console.log(`total items: ${todos.length}`);
    console.log(`items in your list are `);
    todos.forEach(todo => console.log(todo));
}
let condition2 = true;
while (condition2) {
    let update = await inquirer.prompt({
        name: 'updatedvalue',
        type: "confirm",
        message: "do you want to update your list?",
        default: "true",
    });
    condition2 = update.updatedvalue;
    if (!condition2) {
        console.log(`total items: ${todos.length}`);
        console.log(`items in your list are `);
        todos.forEach(todo => console.log(todo));
        break;
    }
    console.log(`total items: ${todos.length}`);
    console.log(`items in your list are `);
    todos.forEach(todo => console.log(todo));
    {
        let todolist = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "what you want to add in your todos?",
            },
            {
                name: "addmore",
                type: "confirm",
                message: "do you want to add more?",
                default: "true",
            }
        ]);
        condition = todolist.addmore;
        todos.push(todolist.todo);
    }
    {
        console.log(`total items: ${todos.length}`);
        console.log(`items in your list are `);
        todos.forEach(todo => console.log(todo));
    }
}
let condition3 = true;
while (condition3) {
    let todelete = await inquirer.prompt([{ name: "delete",
            type: "confirm",
            message: "do u want to delete an item? ",
            default: "true", }]);
    if (!todelete.delete) {
        break;
    }
    if (todelete.delete === true) {
        let indexnum = await inquirer.prompt([
            {
                name: "index_no",
                type: "number",
                message: "enter index no."
            }
        ]);
        let deleete = indexnum.index_no;
        todos.splice(deleete, 1);
        if (indexnum.index_no > todos.length) {
            console.log("invalid input");
            break;
        }
        for (let j = 0; j < todos.length; j++) {
            console.log(todos[j]);
        }
        break;
    }
}
