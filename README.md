
# Todo App in Angular (v2)

A simple and user-friendly Todo application built with Angular. This app helps you manage your daily tasks with ease by allowing you to add new tasks, edit existing ones, mark tasks as completed or pending, and search/filter through your list. Tasks are saved in your browser’s local storage, so your data persists between sessions.

**This is version 2 of my Todo app. You can check out the previous version [here](https://github.com/aimendurrani/Todo-App).**

---

## Features

* Add new tasks with a title
* Edit existing tasks
* Delete tasks you no longer need
* Mark tasks as completed or pending
* Filter tasks by status: All, Completed, or Pending
* Search tasks by keyword
* Persistent storage using localStorage
* Responsive and clean UI

---

## Demo

(To-do App)[https://todo-app-v2-gilt.vercel.app/]

---

## Installation

1. Clone the repository

```bash
git clone https://github.com/aimendurrani/todo-app-v2.git  
```

2. Navigate into the project folder

```bash
cd todo-app-v2  
```

3. Install dependencies

```bash
npm install  
```

4. Run the development server

```bash
ng serve  
```

5. Open your browser at `http://localhost:4200` to see the app in action

---

## Usage

* Use the input box and the “Add Task” button to create new tasks.
* Click the checkbox next to each task to toggle its completion status.
* Click “Edit” to modify the task title and “Save” to confirm changes.
* Use the search box to filter tasks by title keywords.
* Tasks are grouped into Pending and Completed sections for easy viewing.

---

## Technologies Used

* Angular
* TypeScript
* HTML & CSS
* LocalStorage API

---

## Concepts Covered

* **Angular Components & Data Binding** — Building UI with components, using property and event binding (`[(ngModel)]`, `(click)`) for interaction.
* **TypeScript Interfaces** — Defining `Task` interface for better type safety and code clarity.
* **Component Lifecycle** — Using `ngOnInit` to initialize data when the component loads.
* **Filtering and Searching** — Using JavaScript array methods like `filter` and `includes` to implement search and filter functionality.
* **Conditional Rendering** — Displaying or hiding elements dynamically with Angular directives such as `*ngIf` and `*ngFor`.
* **Local Storage** — Saving tasks in browser storage so data persists across page refreshes.
* **State Management** — Managing app state via variables for tasks, editing, and user input.
* **Event Handling** — Responding to user actions like clicks and key presses to update the task list.

---

## Contributing

Contributions are welcome! Feel free to fork the repo and submit pull requests for improvements or bug fixes.

---

## License

MIT License

---
