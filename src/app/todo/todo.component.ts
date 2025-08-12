import { Component, OnInit } from '@angular/core'

// for type safety
interface Task {
    id: number
    title: string
    completed: boolean
}

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
    tasks: Task[] = []
    newTask = ''
    filter: 'all' | 'completed' | 'pending' = 'all'

    editId: number | null = null
    editText = ''
    searchText = ''

    ngOnInit() {
        this.loadTasks() // load tasks from local storage
    }

    //searching
    filteredTasks(): Task[] {
        if (!this.searchText.trim()) return this.tasks
        const lowerSearch = this.searchText.toLowerCase()
        return this.tasks.filter((task) => task.title.toLowerCase().includes(lowerSearch)
        )
    }

    pendingTasks(): Task[] {
        //return this.tasks.filter((t) => !t.completed)
        return this.filteredTasks().filter((t) => !t.completed)
    }

    completedTasks(): Task[] {
        return this.filteredTasks().filter((t) => t.completed)
    }


    //prev
    completedCount(): number {
        return this.tasks.filter((t) => t.completed).length
    }

    addTask() {
        const title = this.newTask.trim()
        if (!title) return

        this.tasks.push({
            id: Date.now(),
            title,
            completed: false,
        })

        this.newTask = ''
        this.saveTasks()
    }

    toggleCompletion(id: number) {
        const task = this.tasks.find((t) => t.id === id)
        if (task) {
            task.completed = !task.completed
            this.saveTasks()
        }
    }

    deleteTask(id: number) {
        this.tasks = this.tasks.filter((t) => t.id !== id)
        this.saveTasks()
    }

    startEdit(task: Task) {
        this.editId = task.id
        this.editText = task.title
    }

    saveEdit() {
        if (!this.editText.trim() || this.editId === null) {
            this.cancelEdit()
            return
        }

        const task = this.tasks.find((t) => t.id === this.editId)
        if (task) task.title = this.editText.trim()

        this.cancelEdit()
        this.saveTasks()
    }

    cancelEdit() {
        this.editId = null
        this.editText = ''
    }

    private saveTasks() {
        localStorage.setItem('todo_tasks', JSON.stringify(this.tasks))
    }

    private loadTasks() {
        const saved = localStorage.getItem('todo_tasks')
        if (saved) this.tasks = JSON.parse(saved)
    }
}
