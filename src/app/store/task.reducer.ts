import { createReducer, on } from '@ngrx/store';
import taskActions from './task.actions';
import { Tasks, task } from './task.models';
import { produce } from 'immer';


const initialState: Tasks = { counter: 0, tasks: [] };

const addTask = (state: Tasks, action: { task: string }) => {
  return produce(state, draft => {
    draft.counter = state.counter + 1;
    draft.tasks.push({
      id: state.counter + 1,
      task: action.task,
      checked: false
    });
  });
};

const removeTask = (state: Tasks, action: { id: number }) => {
  return produce(state, draft => {
    draft.tasks = state.tasks.filter(task => task.id !== action.id);
    draft.counter = draft.tasks.length;
  });
};

const checkTask = (state: Tasks, action: { id: number }) => {
  return produce(state, draft => {
    draft.tasks.forEach(task => {
      if (task.id === action.id){
        task.checked = !task.checked;
      }
    });
  })
};

const setTask = (_: any, action: Tasks) => {
  return { counter: action.counter, tasks: action.tasks };
};

const clearTask = (state: Tasks, _: any) => {
  return produce(state, draft => {
    draft.tasks = state.tasks.filter(task => !task.checked);
    draft.counter = draft.tasks.length;
  });
};

export const taskReducer = createReducer(
  initialState,
  on(taskActions.add, addTask),
  on(taskActions.remove, removeTask),
  on(taskActions.check, checkTask),
  on(taskActions.set, setTask),
  on(taskActions.clear, clearTask)
);


