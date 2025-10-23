#!/usr/bin/env node

// Imports
const validateArgs = require("./validateArgs");
const controller = require("./controller");

// Get cli arguments
const cliArgs = process.argv;
const command = cliArgs[2];
const commandArgs = cliArgs.slice(3);

if (command === "add" && validateArgs(command, 1, commandArgs)) {
  controller.addTask(commandArgs);
} else if (command === "update" && validateArgs(command, 2, commandArgs)) {
  controller.updateTask(commandArgs);
} else if (command === "delete" && validateArgs(command, 1, commandArgs)) {
  controller.deleteTask(commandArgs);
} else if ((command === "mark-in-progress" || command === 'mark-done') && validateArgs(command , 1 , commandArgs)) {
  controller.markTask(command , commandArgs)
}else if (command === "list") {
  // waiting
} else {
  // waiting
}
