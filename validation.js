const AppError = require("./errors");
const { errors } = require("./cliErrors");

class Validation {
  constructor(command, commandArgs = []) {
    this.command = command;
    this.commandArgs = commandArgs;
  }

  isEqualCount = (count) => {
    if (count === this.commandArgs.length) {
      return true;
    } else {
      throw new AppError("[ Command error ]", errors[this.command]);
    }
  };

  isNumber = (value) => {
    if (isNaN(value)) {
      throw new AppError("[ Command error ]", errors[this.command]);
    } else {
      return true;
    }
  };

  isIncludes = (enums) => {
    if (enums.includes(this.commandArgs[0])) {
      return true;
    } else {
      throw new AppError("[ Command error ]", errors[[this.command]]);
    }
  };
}

module.exports = Validation;
