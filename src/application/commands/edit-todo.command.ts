import { inject, injectable } from 'tsyringe';
import type { ITodoRepository } from '../../infrastructure/repositories/mod.ts';
import type { Id } from '../../types.ts';

export interface EditTodoCommandDto {
  id: Id;
  note: string;
}

@injectable()
export class EditTodoCommand {
  constructor(
    @inject('TodoRepository') private todoRepository: ITodoRepository,
  ) {}

  call({ id, note }: EditTodoCommandDto) {
    return this.todoRepository.update(id, { note });
  }
}
