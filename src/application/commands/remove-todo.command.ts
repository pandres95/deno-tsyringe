import { inject, injectable } from 'tsyringe';
import type { ITodoRepository } from '../../infrastructure/repositories/mod.ts';
import type { Id } from '../../types.ts';

export interface RemoveTodoCommandDto {
  id: Id;
}

@injectable()
export class RemoveTodoCommand {
  constructor(
    @inject('TodoRepository') private todoRepository: ITodoRepository,
  ) {}

  call({ id }: RemoveTodoCommandDto) {
    return this.todoRepository.remove(id);
  }
}
