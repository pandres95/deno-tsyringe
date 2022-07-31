import { inject, injectable } from 'tsyringe';
import type { ITodoRepository } from '../../infrastructure/repositories/mod.ts';

@injectable()
export class ListTodoQuery {
  constructor(
    @inject('TodoRepository') private todoRepository: ITodoRepository,
  ) {}

  call() {
    return this.todoRepository.list();
  }
}
