export interface ITask {
  _id?: string;
  check: boolean;
  name: string;
  position: number;
  isEdit?: boolean;
}
