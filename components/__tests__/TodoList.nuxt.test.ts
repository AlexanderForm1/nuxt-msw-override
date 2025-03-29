import { describe, it } from 'vitest';
import { screen, render } from '@testing-library/vue';
import TodoList from '../TodoList.vue';
import { server } from '~/vitest.setup';
import { http, HttpResponse } from 'msw';

describe('TodoList Nuxt', () => {
  it('should render todos', async () => {
    server.use(
      http.get('https://localhost:3001/todos', () => {
        return HttpResponse.json([
          { id: 1, title: 'Todo 3' },
        ]);
      }),
    );

    render(TodoList);
    await screen.findByText('Todo 3');
  });
});
