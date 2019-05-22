import { ITask } from 'src/app/components/boards/board-detail/card/task/interfaces';

export interface ICard {
  name: string;
  description?: string;
  position: number;
  tasks?: ITask[];
}
