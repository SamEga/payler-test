export interface ITask {
  id: number;
  title: string;
  completed: boolean;
  important: number;
  changeStatus(): void;
}
