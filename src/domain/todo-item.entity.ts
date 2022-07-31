import type { Id, TodoItem } from "../types.ts";

export class TodoItemEntity implements TodoItem {
  id: Id;
  note: string;
  done: boolean;

  constructor ({ id, note, done }: Partial<TodoItem>) {
    this.id = id ?? crypto.randomUUID();
    this.note = note ?? '';
    this.done = done ?? false;
  }
}
