const AppError = require("./errors");

const validateArgs = (command, argCount, commandArgs) => {
  if (commandArgs.length !== argCount) {
    let message;
    switch (command) {
      case "add":
        message = `The "add" command accepts one argument (the description). If the description contains spaces, wrap it in double quotes. Example:  add "learn math" `;
        break;
      case "update":
        message = `The "update" command accepts two argument (the id and description). Example:  update 1234 "learn math" `;
        break;
      case "delete":
        message = `The "delete" command accepts one argument (the id). Example:  delete 1234 `;
        break;
      case "mark-in-progress":
      case "mark-done":
        message = `The "mark" command accepts one argument (the id). Example:  mark-in-progress 1234 or mark-done 1234 `;
        break;
    }
    const newError = new AppError("[ Command error ]", message);
    newError.log();
    return false;
  } else {
    return true;
  }
};

module.exports = validateArgs;
