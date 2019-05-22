import { ICard } from 'src/app/components/boards/board-detail/card/interfaces';

export interface IColumn {
  _id?: string;
  name: string;
  position: number;
  cards?: ICard[];
  isEdit?: boolean;

}
