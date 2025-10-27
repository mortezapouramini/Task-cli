class AppError extends Error {
  constructor(name, message) {
    super(message);
    this.name = name;
  }
  log() {
    const err = {
      name: this.name,
      message: this.message,
      stack: this.stack.split("\n")[1],
    };
    console.error(err);
  }
}

module.exports = AppError;
