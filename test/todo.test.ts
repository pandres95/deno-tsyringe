import { addTodo, listTodo } from '../mod.ts';
import { assertEquals, assertExists } from './deps.ts';

Deno.test('E2E/Todo', async (t) => {
  await t.step('allows creating a todo item', async () => {
    const item = await addTodo('buy eggs');

    assertExists(item.id);
    assertEquals(item.note, 'buy eggs');
  });

  await t.step('gets the list of todo items', async () => {
    const items = await listTodo();

    assertEquals(items.length, 1);
    assertEquals(items[0].note, 'buy eggs');
  });
});
