import { IColumn } from 'src/app/components/boards/column/interfaces';

export interface IDashboard {
  name: string;
  columns?: IColumn[];
}
