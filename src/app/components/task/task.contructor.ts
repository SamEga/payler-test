export class Task {
  public id;
  public title;
  public completed;
  public important;

  constructor(id: number, title: string, completed: boolean, important: 1 | 2 | 3) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.important = important;
  }

  changeStatus() {
    this.completed = true;
  }
}
