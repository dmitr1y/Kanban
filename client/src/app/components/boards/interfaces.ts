import { IColumn } from 'src/app/components/boards/board-detail/column/interfaces';

export interface IDashboard {
  _id: string;
  name: string;
  columns?: IColumn[];
}
