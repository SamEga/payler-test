import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from './tasks.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass'],
})
export class TaskComponent {
  @Input() task: ITask;
  @Output() selected: EventEmitter<ITask> = new EventEmitter();

  onChangeStatus(task: ITask) {
    this.selected.emit(task);
    this.task.changeStatus();
  }
}
