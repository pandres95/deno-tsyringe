import 'reflect-metadata';

import {
  AddTodoCommand,
  EditTodoCommand,
  MarkAsDoneCommand,
  RemoveTodoCommand,
} from './src/application/commands/mod.ts';
import { Lifecycle, container, registry } from 'tsyringe';

import { ListTodoQuery } from './src/application/queries/mod.ts';
import { MemoryTodoRepository } from './src/infrastructure/repositories/memory.repository.ts';

type Id = string;

@registry([
  {
    token: 'TodoRepository',
    useClass: MemoryTodoRepository,
    options: {
      lifecycle: Lifecycle.Singleton,
    },
  },
])
export class DefaultRegistry {}

export function addTodo(note: string) {
  return container.resolve(AddTodoCommand).call({ note });
}

export function listTodo() {
  return container.resolve(ListTodoQuery).call();
}

export function editTodo(id: Id, note: string) {
  return container.resolve(EditTodoCommand).call({ id, note });
}

export function markAsDone(id: Id) {
  return container.resolve(MarkAsDoneCommand).call({ id });
}

export function removeTodo(id: Id) {
  return container.resolve(RemoveTodoCommand).call({ id });
}
