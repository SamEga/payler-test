import { Component, Input } from '@angular/core';
import { ITask } from '../task/tasks.model';


export interface IClimportant {
  code: 3 | 2 | 1;
  title: 'low' | 'mid' | 'hi';
}

@Component({
  selector: 'app-cl-important',
  templateUrl: './cl-important.component.html',
  styleUrls: ['./cl-important.component.css'],
})
export class ClImportantComponent {
  @Input() task: ITask;

  clImportant: Array<IClimportant> = [
    { code: 3, title: 'low' },
    { code: 2, title: 'mid' },
    { code: 1, title: 'hi' },
  ];
}
