import { inject, injectable } from 'tsyringe';
import { TodoItemEntity } from '../../domain/todo-item.entity.ts';
import type { ITodoRepository } from '../../infrastructure/repositories/mod.ts';

export interface AddTodoCommandDto {
  note: string;
}

@injectable()
export class AddTodoCommand {
  constructor(
    @inject('TodoRepository') private todoRepository: ITodoRepository,
  ) {}

  call({ note }: AddTodoCommandDto) {
    return this.todoRepository.add(new TodoItemEntity({ note }));
  }
}
