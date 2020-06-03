import { Component, Input } from '@angular/core';
import { ITask } from '../task/tasks.model';

export interface IClimportant {
  code: 3 | 2 | 1;
  title: 'low' | 'mid' | 'hi';
}

@Component({
  selector: 'app-cl-important',
  template: `<select [(ngModel)]="task.important"><option *ngFor="let cl of clImportant" [ngValue]="cl.code">{{ cl.title }}</option></select> `,
})
export class ClImportantComponent {
  @Input() task: ITask;

  clImportant: Array<IClimportant> = [
    { code: 3, title: 'low' },
    { code: 2, title: 'mid' },
    { code: 1, title: 'hi' },
  ];
}
