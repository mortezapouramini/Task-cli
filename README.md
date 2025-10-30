# 🧭 Task Tracker CLI App

Sample solution for the [Task Tracker](https://roadmap.sh/projects/task-tracker) challenge from [roadmap.sh](https://roadmap.sh/).

---

## 🚀 Built With

- **Node.js**

---

## ✨ Features

- Manage tasks with full **CRUD** operations:
  - Add new tasks  
  - Update existing tasks  
  - Delete tasks  
  - Mark tasks as done or in progress  
  - List tasks by their status  

---

## 🧩 Prerequisites

Before running the project, make sure you have installed:

- **Node.js** ≥ 18.x → [Download here](https://nodejs.org/en/)

---

## ⚙️ Installation & Usage

```bash
# 1️⃣ Clone the repository
git clone https://github.com/mortezapouramini/Task-cli.git

# 2️⃣ Move into the project folder
cd Task-cli

# 3️⃣ Run this command in terminal to add package to npm
npm link

# 3️⃣ Usage examples:

# Add a task
task-cli add "Buy groceries"

# Update a task
task-cli update 1 "Buy groceries and cook dinner"

# Delete a task
task-cli delete 2

# Mark as done
task-cli mark-done 3

# Mark as in progress
task-cli mark-in-progress 4

# List all tasks
task-cli list

# List only completed tasks
task-cli list done

# List only to-do tasks
task-cli list todo

# List tasks currently in progress
task-cli list in-progress
