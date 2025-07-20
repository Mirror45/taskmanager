# 📝 TaskManager – Modern SPA for Task Management

🚀 **Live Demo**: [taskmanager-iota-ivory.vercel.app](https://taskmanager-iota-ivory.vercel.app)

A feature-rich Single Page Application (SPA) for task management, built with React and Redux Toolkit. The project includes advanced state management logic, dynamic filtering, sorting, and data visualization.

# 📖 Project Overview
TaskManager is a SPA designed to showcase proficiency in modern frontend technologies. The application simulates a personal task management service and emphasizes a clean, minimalist interface to help users stay focused.

A key aspect of the project is the implementation of complex state management using Redux Toolkit, enabling a fast, interactive, and responsive user experience that updates in real time without full page reloads.

---

## ✨ Key Features

### 📊 Insightful Statistics & Visualization
A dedicated "Statistics" page with interactive charts powered by Chart.js. Users can analyze their productivity over a selected period and visualize task distribution by color-coded categories.

### 🔍 Advanced Filtering & Sorting
Easily search and organize tasks with a variety of filters:

- All
- Overdue
- Today
- Favorites
- Repeating
- Archive

Tasks can be sorted by date (ascending/descending) or using the default order.

### 🎨 Flexible Task Customization
- Set due dates with a user-friendly calendar using `react-flatpickr`.
- Create recurring tasks tied to specific days of the week.
- Categorize tasks with color tags for better visual organization.

### ✅ Full CRUD Task Management
Supports the full cycle of Create, Read, Update, and Delete operations. Tasks can be edited directly in the task card — no need to navigate to a separate page.

### 🔄 Отзывчивый UI и обратная связь
The interface responds instantly to user actions. Buttons are disabled during API requests and update their text  (e.g., `"Save"` → `"Saving..."`), to keep users informed. In case of network errors, the edit form animates to draw attention.

## 🛠 Tech Stack

### 🚀 Core Stack

| Technology             | Purpose                                                                 |
|------------------------|-------------------------------------------------------------------------|
| React                  | Building a declarative, component-based, and interactive UI             |
| TypeScript             | Static typing to improve code readability and reliability               |
| Redux Toolkit          | Managing complex global state in a predictable and efficient way        |
| React Router DOM v6    | Client-side routing for seamless multi-page experience in a SPA         |
| Axios                  | Promise-based HTTP client for reliable backend API communication        |
| CSS Modules            | Scoped CSS for components to avoid style conflicts                      |

### 📦 Additional Libraries and Their Roles

| Library                           | Purpose                                                                 |
|----------------------------------|-------------------------------------------------------------------------|
| react-chartjs-2 / chart.js       | React components for integrating interactive charts with Chart.js       |
| flatpickr / react-flatpickr      | React wrapper for a lightweight and user-friendly date picker widget   |
| Day.js                           | Lightweight utility for date formatting and manipulation                |
| json-server                      | Mock server to simulate a REST API for development                      |

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

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/Mirror45/taskmanager.git

# Install frontend dependencies (from the project root)
npm install

# In a separate terminal, navigate to the backend folder
cd backend

# Install backend dependencies
npm install

# Start the mock API server at http://localhost:10000
npm run server
```
> Open another separate terminal in the project root and start the frontend:

```bash
cd taskmanager # if you are not already in the project root
npm start
```
> *The project uses the API at `http://localhost:10000/`.  
> Please make sure the mock server is running for proper functionality.*

---

### 🧠 Challenges & Future Improvements

#### ✅ Overcome Challenges

- **Managing Complex State:**  
  One of the core tasks was designing a Redux store architecture capable of handling interconnected data: task lists, active filters, sorting parameters, and UI state (e.g., which card is in edit mode). This required careful slice design to ensure data consistency.

- **Building a Dynamic Interface:**  
  Implementing real-time feedback in the UI (updating counters in filters, button state changes, text updates) in response to user actions and API requests required precise synchronization between state and React components to avoid unnecessary re-renders and ensure smooth performance.

#### 🚧 Possible Improvements

- **Offline Mode Support:**  
  Add the ability to work with tasks without internet connection, with data synchronization upon reconnection.

- **Animations & Transitions:**  
 Use libraries like `Framer Motion` to add smooth animations during task creation, deletion, and filtering to enhance UX.

- **Full Authentication System:**  
  Replace the current basic auth with a complete system including registration, login, and JWT tokens.

