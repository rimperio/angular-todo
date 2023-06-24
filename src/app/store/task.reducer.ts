import { createReducer, on } from '@ngrx/store';
import taskActions from './task.actions';
import { Tasks } from './task.models';


const initialState: Tasks = { counter: 0, tasks: [] };
export const taskReducer = createReducer(
  initialState,
  on(taskActions.add, (state, action) => {
    return {
      counter: state.counter + 1,
      tasks: [
        ...state.tasks,
        {
          id: state.counter + 1,
          task: action.task,
          checked: false,
        },
      ],
    };
  }),
  on(taskActions.remove, (state, action) => {
    const filtered = state.tasks.filter((task) => task.id !== action.id);
    return filtered.length
      ? { counter: state.counter, tasks: filtered }
      : {
          counter: 0,
          tasks: [],
        };
  }),
  on(taskActions.check, (state, action) => {
    const updated = state.tasks.map((task) =>
      task.id === action.id ? { ...task, checked: !task.checked } : task
    );
    return { counter: state.counter, tasks: updated };
  }),
  on(taskActions.set, (_, action) => {
    return { counter: action.counter, tasks: action.tasks };
  }),
  on(taskActions.clear, (state, _) => {
    const active = state.tasks.filter((task) => !task.checked);
    return active.length > 0
      ? { counter: state.counter, tasks: active }
      : { counter: 0, tasks: [] };
  })
);