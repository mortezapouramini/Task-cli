#!/usr/bin/env node

// Imports
const Validation = require("./validation");
const controller = require("./controller");
const AppError = require("./errorHandler");
const { errors } = require("./cliErrors");

// Get cli arguments
const cliArgs = process.argv;
const command = cliArgs[2];
const commandArgs = cliArgs.slice(3);

const validator = new Validation(command, commandArgs);
try {
  if (command === "add") {
    validator.isEqualCount(1);
    controller.addTask(commandArgs);
  } else if (command === "update") {
    validator.isEqualCount(2);
    validator.isNumber(commandArgs[0]);
    controller.updateTask(commandArgs);
  } else if (command === "delete") {
    validator.isEqualCount(1);
    validator.isNumber(commandArgs[0]);
    controller.deleteTask(commandArgs);
  } else if (command === "mark-in-progress" || command === "mark-done") {
    validator.isEqualCount(1);
    validator.isNumber(commandArgs[0]);
    controller.markTask(command, commandArgs);
  } else if (command === "list") {
    const enums = ["done", "todo", "in-progress"];
    if (commandArgs.length !== 0) {
      validator.isEqualCount(1);
      validator.isIncludes(enums);
    }
    controller.listingTasks(commandArgs);
  } else {
    throw new AppError("[ Command error ]", errors.notFound);
  }
} catch (error) {
  error.log();
}
