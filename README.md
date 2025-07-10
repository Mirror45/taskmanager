# 📝 Task Manager

A full-featured task management application built with **React**, **Redux Toolkit**, **TypeScript**, and **Vite**. This project demonstrates modern frontend architecture, state management, and component-based UI design — ideal for real-world team productivity tools.

## ⚙️ Functionality

### 📋 Core Features

- Displaying tasks with pagination (8 per page) using `Load more`
- Creating tasks with a form: description, date, color, repeatability
- Editing tasks
- Archiving and adding tasks to favorites
- Sorting by date (ascending/descending)
- Filters: `All`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Archive`
- Automatic updating of task counters upon any changes

### 📊 Statistics

- Weekly task statistics screen
- Line chart by day
- Pie chart by color categories

### ☁️ API Integration

- Full CRUD via REST API: `GET/POST/PUT/DELETE /tasks`
- Sync endpoint: `POST /tasks/sync`
- Authorization via header: `Authorization: Basic <token>`


## 🛠 Tech Stack

### 🚀 Core Stack

| Technology             | Purpose                                            |
|-----------------------|----------------------------------------------------|
| React                 | Building SPA interface                              |
| TypeScript            | Static typing, improving code readability and reliability |
| Redux Toolkit         | Efficient state management with minimal setup      |
| React Router DOM v7   | Routing and navigation management between pages    |
| Axios                 | API handling, sending HTTP requests                 |
|CSS Modules           | Scoped CSS styles for components to avoid style conflicts |
| React Flatpickr + Flatpickr | Convenient date picker calendar for tasks          |
| Chart.js + react-chartjs-2 | Creating statistical activity charts              |

### 📦 Additional Libraries and Their Roles

| Library                             | Purpose                                           |
|-----------------------------------|--------------------------------------------------|
| @reduxjs/toolkit                  | Simplifies store, reducers, and thunks creation  |
| react-chartjs-2 / chart.js        | Displaying task statistics as charts              |
| flatpickr / react-flatpickr       | Date and time picker components in UI             |
| json-server                      | Mock server to simulate REST API                   |
| @testing-library/react / jest-dom / user-event | Component testing and user behavior simulation    |

### 🧪 Quality Control Tools

| Tool                              | Purpose                                          |
|----------------------------------|-------------------------------------------------|
| ESLint                           | Static code analysis to prevent errors and bad practices |
| Prettier                        | Automatic code formatting                        |
| Commitlint + Husky + Lint-Staged | Commit message checking, running linters/formatters before commit |
| EditorConfig                    | Unifying basic editing rules (indentation, line breaks, etc.) |

### 🔐 Husky

Used to run Git hooks. The project has a pre-commit hook that:

- Runs `eslint --fix` and `prettier --write` only on changed files.
- Ensures badly formatted code does not get committed to the repository.

### 🧼 Commitlint

Checks commit messages for compliance with the Conventional Commits standard (e.g., `feat:`, `fix:`, `refactor:`).

### ⚙️ Configurations

- **TypeScript strict mode:** enabled `strict`, `noUnusedLocals`, `noImplicitAny`, `strictNullChecks`, etc. — helps catch errors before app runs.
- **Prettier + ESLint integration:** uses `eslint-config-prettier` to avoid conflicts between linter and formatter.
- **Import organization:** `prettier-plugin-organize-imports` automatically sorts and structures imports.

---

## 📂 Project Structure (Simplified)

src/

├── app/ # App root & router

├── components/ # Reusable UI components

├── hooks/ # Custom React hooks

├── store/ # Redux setup

├── api/ # Axios API logic

├── types/ # TypeScript interfaces and types

├── styles/ # Global styles

└── utils/ # Helper functions

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/Mirror45/taskmanager.git

# Install dependencies
npm install

# Start the mock API server at http://localhost:5000
npm run server

# In a separate terminal, start the frontend
npm start
```
> *The project uses the API at `http://localhost:5000/`.  
> Please make sure the mock server is running for proper functionality.*
