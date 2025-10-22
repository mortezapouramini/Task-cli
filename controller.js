const fs = require("fs");
const path = require("path");
const AppError = require("./errors");

const tasksDb = path.join(__dirname, "tasks.json");

const addTask = async (args) => {
  const description = args[0];
  const taskData = {
    id: Date.now(),
    description,
    status: "todo",
    createdAt: new Date(),
    updatedAt: this.createdAt,
  };

  const isExistDb = fs.existsSync(tasksDb);
  if (!isExistDb) {
    const newError = new AppError(
      "[ Internal error ]",
      `File path [ ${tasksDb} ] not found`
    );
    return newError.log();
  }

  try {
    const data = await fs.promises.readFile(tasksDb, "utf8");
    let tasks = data ? JSON.parse(data) : [];

    tasks.push(taskData);
    await fs.promises.writeFile(tasksDb, JSON.stringify(tasks, null, 2));
    console.log(`Task added successfully (ID: ${taskData.id})`);
  } catch (error) {
    const newError = new AppError("[ Internal error ]", error.message);
    newError.log();
  }
};

const updateTask = async (args) => {
  const id = parseInt(args[0]);
  const newDescription = args[1];

  try {
    const data = await fs.promises.readFile(tasksDb, "utf8");
    let tasks = data ? JSON.parse(data) : [];

    const taskIndex = tasks.findIndex((t) => t.id === id);
    if (taskIndex === -1) {
      const newError = new AppError(
        "[ Not found ]",
        "Task with the given ID not found"
      );
      return newError.log();
    }

    let task = tasks[taskIndex];
    const updatedTask = {
      ...task,
      description: newDescription,
      updatedAt: new Date(),
    };
    const updatedTasks = tasks.map((t) => (t.id === id ? updatedTask : t));

    await fs.promises.writeFile(tasksDb, JSON.stringify(updatedTasks, null, 2));
    console.log(`Task updated successfully (ID: ${task.id})`);
  } catch (error) {
    const newError = new AppError("[ Internal error ]", error.message);
    newError.log();
  }
};

const deleteTask = async (args) => {
  const id = parseInt(args[0]);

  try {
    const data = await fs.promises.readFile(tasksDb, "utf8");
    const tasks = data ? JSON.parse(data) : [];

    const isExist = tasks.some((t) => t.id === id);
    if (!isExist) {
      const newError = new AppError(
        "[ Not found ]",
        "Task with the given ID not found"
      );
      return newError.log();
    }
    const filteredTasks = tasks.filter((t) => t.id !== id);

    await fs.promises.writeFile(
      tasksDb,
      JSON.stringify(filteredTasks, null, 2)
    );
    console.log(`Task deleted successfully (ID: ${id}`);
  } catch (error) {
    const newError = new AppError("[ Internal error ]", error.message);
    newError.log();
  }
};

module.exports = {
  addTask,
  updateTask,
  deleteTask,
};
