import { ITask } from 'src/app/components/boards/card/task/interfaces';

export interface ICard {
  name: string;
  description?: string;
  position: number;
  tasks?: ITask[];
}
