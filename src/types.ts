export type Id = string;

export interface TodoItem {
  id: Id;
  note: string;
  done: boolean;
}
