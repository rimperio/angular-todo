import { createSelector } from '@ngrx/store';
import { Tasks, task } from './task.models';

export const selectTasks = (state: { todo: Tasks }) => state.todo.tasks;

export const selectTaskById = (id: number) =>
  createSelector(selectTasks, (tasks: task[]) =>
    tasks.find((task) => task.id === id)
);

export const selectActiveTasks = createSelector(
  selectTasks,
  (tasks: task[]) => tasks.filter((task) => !task.checked)
);

export const selectCheckedTasks = createSelector(
  selectTasks,
  (tasks: task[]) => tasks.filter((task) => task.checked)
);

export const selectCounter = (state: { todo: Tasks }) => state.todo.counter;
