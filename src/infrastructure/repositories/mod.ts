import { Id, TodoItem } from '../../types.ts';

export interface ITodoRepository {
  add(item: TodoItem): Promise<TodoItem>;
  list(): Promise<TodoItem[]>;
  update(id: Id, item: Partial<TodoItem>): Promise<TodoItem>;
  remove(id: Id): Promise<void>;
}
