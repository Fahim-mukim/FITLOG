# 🏋️ FitLog — Workout Library

**Train with intent. Log every set.**

FitLog is a modern workout library and tracking application built with Next.js. It allows users to explore workouts, view detailed exercise information, organize their daily workout plans, and save exercises for later.

## ✨ Features

* **Workout Library:** Browse workouts with images, categories, equipment, duration, calories burned, and ratings.
* **Workout Details:** View exercise descriptions, key specifications, and step-by-step instructions.
* **Today's Workout Plan:** Add workouts to your daily plan, mark them as completed, undo completion, and remove exercises.
* **Save for Later:** Save workouts for future reference and remove them whenever needed.
* **Live Navbar Counters:** Track the number of workouts in your plan and saved list.
* **Workout Sorting:** Sort workouts by duration, calories burned, rating, and name.
* **Plan Summary:** View workout count, total duration, and estimated calories burned.
* **Toast Notifications:** Receive feedback when adding or saving workouts.
* **Responsive Design:** Use the application on mobile, tablet, and desktop screens.
* **Loading UI:** Display a loading interface while page content is being prepared.
* **Custom 404 Page:** Show a helpful page when a route cannot be found.

## 🛠️ Technologies Used

* **Next.js** — React framework and file-based routing
* **React** — Component-based user interface
* **JavaScript (ES6+)** — Application logic
* **Tailwind CSS** — Responsive styling
* **React Toastify** — Toast notifications
* **Next.js Image** — Image optimization
* **Workout API** — Exercise data

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project folder:

   ```bash
   cd next-js-ass-project
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open http://localhost:3000 in your browser.

## 📁 Project Structure

```text
next-js-ass-project/
├── public/
├── src/
│   ├── app/
│   │   ├── exercise/
│   │   ├── my-plan/
│   │   ├── layout.js
│   │   ├── page.jsx
│   │   ├── loading.jsx
│   │   ├── not-found.jsx
│   │   └── globals.css
│   ├── component/
│   │   ├── exercise/
│   │   ├── my-plan/
│   │   └── shared/
│   ├── context/
│   └── lib/
├── package.json
└── README.md
```

*Note: The structure above is a general overview. Your actual project may contain additional files or slightly different filenames.*

## 📖 Available Scripts

| Command         | Description                                |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Starts the development server              |
| `npm run build` | Creates a production build                 |
| `npm run start` | Starts the production server               |
| `npm run lint`  | Runs linting, if configured in the project |

## 🎯 Project Goals

FitLog demonstrates the use of reusable React components, Next.js App Router, shared state management with Context API, dynamic routes, responsive layouts, and interactive workout management.

## 👨‍💻 Author

**Muhammad Fahim Uddin Mukim**

---

© 2026 FitLog — Workout Library. Train hard, log honest.
