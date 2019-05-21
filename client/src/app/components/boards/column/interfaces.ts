import { ICard } from 'src/app/components/boards/card/interfaces';

export interface IColumn {
  name: string;
  position: number;
  cards: ICard[];
}
