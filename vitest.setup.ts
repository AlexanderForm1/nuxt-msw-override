import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { afterAll, afterEach, beforeAll } from 'vitest';

export const server = setupServer(
  http.get('https://localhost:3001/todos', () => {
    return HttpResponse.json([
      { id: 1, title: 'Todo 1' },
      { id: 2, title: 'Todo 2' },
    ]);
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());