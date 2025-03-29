<script setup lang="ts">
type Todo = {
  id: number;
  title: string;
};

const todos = ref<Array<Todo>>([]);
onMounted(() => {
  fetch('https://localhost:3001/todos')
    .then((response) => response.json())
    .then((data: Array<Todo>) => {
      todos.value = data;
    });
});
</script>

<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>