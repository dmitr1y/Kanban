import { ITask } from 'src/app/components/boards/card-detail/task/interfaces';

export interface ICard {
  _id?: string;
  name: string;
  description?: string;
  position: number;
  tasks?: ITask[];
}
