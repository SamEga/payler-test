import { Component, ViewChild, ElementRef } from '@angular/core';
import { ITask } from './components/task/tasks.model';
import { Task } from './components/task/task.contructor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  @ViewChild('addTaskRef') addTaskRef: ElementRef;

  private id = 1;
  tasks: Array<ITask> = [];
  filteredTasks: Array<ITask> = [];
  completedTasks: Array<ITask> = [];

  addTask() {
    const { value } = this.addTaskRef.nativeElement;
    if (value) {
      this.tasks.push(new Task(this.id, value, false, 2));
      this.filteredTasks = this.tasks;
      this.id += 1;
      this.clearAddTaskInput();
    }
  }

  onFilter(event: KeyboardEvent) {
    const { value } = event.target as HTMLInputElement;
    if ((event.target as HTMLInputElement).value.length > 2) {
      this.filteredTasks = this.tasks.filter((task: ITask) => {
        if (!task.completed) {
          return task.title.indexOf(value) > -1;
        }
      });
    }

    if (!value) {
      this.filteredTasks = this.tasks;
    }
  }

  findTaskById(id: number): number {
    return this.tasks.findIndex(item => item.id === id);
  }

  trackByFn(index, item): number {
    return item.id;
  }

  clearAddTaskInput() {
    this.addTaskRef.nativeElement.value = '';
  }

  changeStatus(item: ITask) {
    const index = this.findTaskById(item.id);
    const task = this.tasks.splice(index, 1);
    this.completedTasks.push(task[0]);
  }

  sort() {
    this.filteredTasks.sort((a, b) => a.important - b.important);
  }
}
