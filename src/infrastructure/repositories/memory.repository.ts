import { Id, TodoItem } from "../../types.ts";

import { ITodoRepository } from "./mod.ts";
import { singleton } from "tsyringe";

@singleton()
export class MemoryTodoRepository implements ITodoRepository {
  #items: TodoItem[] = [];

  async add(newItem: TodoItem): Promise<TodoItem> {
    this.#items.push(newItem);

    return await newItem;
  }

  async list(): Promise<TodoItem[]> {
    return await this.#items;
  }

  #findIndex(id: Id) {
    const index = this.#items.findIndex((item) => item.id === id);
    return index !== -1 ? index : undefined;
  }

  async update(id: Id, item: Partial<TodoItem>): Promise<TodoItem> {
    const index = this.#findIndex(id);

    if (index === undefined) {
      throw new Error(`Item with id ${id} not found`);
    }

    for (const key of Object.keys(item)) {
      Object.assign(this.#items[index], {
        [key]: (<Record<string, unknown>>item)[key],
      });
    }
    
    return await this.#items[index];
  }

  remove(id: Id): Promise<void> {
    const index = this.#items.findIndex((item) => item.id === id);
    this.#items.splice(index, 1);

    return Promise.resolve();
  }
}
