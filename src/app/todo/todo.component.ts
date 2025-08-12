import { Component, OnInit } from '@angular/core';

//for type safety
interface Task {
  id: number
  title: string
  completed: boolean
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks: Task[] = []
  newTask = ''
  filter: 'all' | 'completed' | 'pending' = 'all'

  //for editing
  editId: number | null = null
  editText = ''

  ngOnInit() {
    this.loadTasks() //load tasks from local storage
  }

  get completedCount(): number {
  return this.tasks.filter(t => t.completed).length
  }

  addTask() {
    const title = this.newTask.trim()
    if (!title) return //checks if the title is empty

    this.tasks.push({ 
      id: Date.now(), 
      title, 
      completed: false })

    this.newTask = ''//reset
    this.saveTasks()//saves to local storage
  }

  toggleCompletion(id: number) {
    const task = this.tasks.find(t => t.id === id)
    if (task) {
      task.completed = !task.completed
      this.saveTasks()
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id)
    this.saveTasks()
  }

  startEdit(task: Task) {
    this.editId = task.id
    this.editText = task.title
  }

  saveEdit() {
    if (!this.editText.trim() || this.editId === null) { // cancel edit if editText is empty
      this.cancelEdit()
      return;
    }

    const task = this.tasks.find(t => t.id === this.editId)//update the first task w the sameid
    if (task) task.title = this.editText.trim()

    this.cancelEdit();//reset
    this.saveTasks();//save
  }

  cancelEdit() {
    this.editId = null
    this.editText = ''
  }

  changeFilter(to: 'all' | 'completed' | 'pending') {
    this.filter = to
  }

  get filteredTasks() {
    if (this.filter === 'all') return this.tasks//all
    if (this.filter === 'completed') return this.tasks.filter(t => t.completed)//completed
    return this.tasks.filter(t => !t.completed)//pending
  }

  trackById(index: number, task: Task) {
    return task.id
  }

  private saveTasks() {
    localStorage.setItem('todo_tasks', JSON.stringify(this.tasks)) //converts arr to json
  }

  private loadTasks() {
    const saved = localStorage.getItem('todo_tasks')
    if (saved) this.tasks = JSON.parse(saved)//json back to arr
  }
}
