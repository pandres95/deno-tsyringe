import { inject, injectable } from "tsyringe";
import type { ITodoRepository } from "../../infrastructure/repositories/mod.ts";
import type { Id } from "../../types.ts";

export interface MarkAsDoneCommandDto {
  id: Id;
}

@injectable()
export class MarkAsDoneCommand {
  constructor(
    @inject("TodoRepository") private todoRepository: ITodoRepository
  ) {}

  call({ id }: MarkAsDoneCommandDto) {
    return this.todoRepository.update(id, { done: true });
  }
}
